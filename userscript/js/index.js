(function () {
  'use strict'
  /* eslint-disable no-undef, camelcase */
  let tm_unsafeWindow = unsafeWindow
  let tm_xmlHttpRequest = GM_xmlhttpRequest
  let tm_setValue = GM_setValue
  let tm_getValue = GM_getValue
  let tm_openInTab = GM_openInTab
  let tm_addStyle = GM_addStyle
  /* eslint-enable no-undef, camelcase */
  console.log('hello world')
  let $ = tm_unsafeWindow.jQuery
  if (!$) {
    console.log('no jquery in this page')
  }

  function notify (message) {
    let now = new Date()

    $('#bgm_tv_tracker_notification')
      .prepend(`<hr><p>${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ${message}</p>`)
  }

  const parseHeader = function (lines) {
    let headers = {}
    for (let line of lines.trim().split('\r')) {
      line = line.trim()
      if (line) {
        Object.assign(headers, parseHeaderLine(line))
      }
    }
    return headers
  }

  const parseHeaderLine = function (line) {
    let headers = {}
    let headerExp = /^([^: \t]+):[ \t]*((?:.*[^ \t])|)/
    let match = headerExp.exec(line)
    let k = match && match[1]
    k = k.toLowerCase()
    headers[k] = match[2]
    return headers
  }

  const NORMAL_ONLOAD = (resolve, reject) => (response) => {

    response.headers = parseHeader(response.responseHeaders)

    // console.log(response)
    if (response.status < 300) {
      if (response.headers['content-type'].startsWith('application/json')) {
        response.data = JSON.parse(response.responseText)
      }
      resolve(response)
    } else {
      console.log(response)
      if (response.headers['content-type'].startsWith('application/json')) {
        response.data = JSON.parse(response.responseText)
      }
      reject({ response })
    }
  }

  const requests = {
    get (url, headers = {}) {
      return new Promise((resolve, reject) => {
        tm_xmlHttpRequest({
          method: 'GET',
          url,
          headers,
          onload: NORMAL_ONLOAD(resolve, reject)
        })
      })
    },
    post (url, data = {}, headers = {}) {
      if (data !== null && typeof data === 'object') {
        data = JSON.stringify(data)
        headers['content-Type'] = 'application/json'
      }
      return new Promise((resolve, reject) => {
        tm_xmlHttpRequest({
          method: 'POST',
          data,
          url,
          headers,
          onload: NORMAL_ONLOAD(resolve, reject)
        })
      })
    }
  }

  const bgmApi = {
    get (url, headers = {}) {
      return new Promise((resolve, reject) => {
        requests.get(url, headers).then(
          response => {
            if (response.data.code === 401) {
              let error = { response }
              reject(error)
            } else {
              resolve(response)
            }
          },
          error => reject(error)
        )
      })
    },
    post (url, data = {}, headers = {}) {
      return new Promise((resolve, reject) => {
        requests.post(url, data, headers).then(
          response => { resolve(response) },
          error => reject(error)
        )
      })
    }
  }

  const VARS = {
    apiServerURL: 'https://bangumi-auto-tracker.trim21.cn',
    callBackUrl: 'https://bangumi-auto-tracker.trim21.cn/oauth_callback',
    apiBgmUrl: 'https://api.bgm.tv',
    authURL: ''
  }
  VARS.authURL = 'https://bgm.tv/oauth/authorize?client_id=bgm2775b2797b4d958b&response_type=code&redirect_uri=' + VARS.callBackUrl

  if (window.TM_ENV === 'dev') {
    VARS.apiServerURL = 'http://localhost:6001'
    console.log('dev')
  }

  function getEps (subjectID) {
    return new Promise(
      (resolve, reject) => {
        let eps = tm_getValue(`eps_${subjectID}`, false)
        if (!eps) {
          bgmApi.get(`${VARS.apiBgmUrl}/subject/${subjectID}/ep`).then(
            (response) => {
              response.data.time = Number(new Date().getTime() / 1000)
              tm_setValue(`eps_${subjectID}`, JSON.stringify(response.data))
              resolve(response.data)
            },
            (error) => {
              reject(error)
              notify('get bgm eps error', 2)
            }
          )
        } else {
          eps = JSON.parse(eps)
          if (Number(new Date().getTime() / 1000) - eps.time > 60 * 60 * 2) {
            requests.get(`${VARS.apiBgmUrl}/subject/${subjectID}/ep`).then(
              (response) => {
                response.data.time = Number(new Date().getTime() / 1000)
                tm_setValue(`eps_${subjectID}`, JSON.stringify(response.data))
                resolve(response.data)
              },
              (error) => {
                reject(error)
                notify('get bgm eps error', 2)
              }
            )
          } else {
            resolve(eps)
          }
        }
      }
    )
  }

  let collection = tm_getValue('collection', false) // @type {Array}
  if (!collection) {
    collection = {}
  } else {
    collection = JSON.parse(collection)
  }

  function collectSubject (subject_id) {
    if (!collection[subject_id]) {
      requests.post(`${VARS.apiBgmUrl}/collection/${subject_id}/update`, 'status=do',
        {
          'content-type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer ' + auth.access_token
        }).then(
        response => {
          if (response.data.code === 401) {
            notify(response.data.error)
          } else {
            notify('add this bangumi to your collection', 2)
            collection[subject_id] = true
            tm_setValue('collection', JSON.stringify(collection))
          }
        },
        error => notify(error.response.data.error_description)
      )
    }
  }

  function watchEpisode (message) {
    collectSubject(message.subject_id)
    getEps(message.subject_id).then(
      (data) => {
        let ep = data.eps[parseInt(message.episode) - 1].id
        requests.post(`${VARS.apiBgmUrl}/ep/${ep}/status/watched`, null, { 'Authorization': 'Bearer ' + auth.access_token }).then(
          () => notify(`mark your status successfully`.toString(), 2),
          error => notify(JSON.stringify(error.response.data))
        )
      },
      error => notify(JSON.stringify(error.response.data))
    ).catch(function (err) {
      notify(err.toString(), 2)
    })
  }

  // auth
  let auth
  if (tm_unsafeWindow.location.href.startsWith(VARS.callBackUrl)) {
    if (tm_unsafeWindow.data) {
      tm_setValue('auth', JSON.stringify(tm_unsafeWindow.data))
      let child = tm_unsafeWindow.document.createElement('h1')
      child.innerText = '成功授权 请关闭网页'
      tm_unsafeWindow.document.body.appendChild(child)
    }
  } else {
    auth = tm_getValue('auth', false)
    if (auth) {
      auth = JSON.parse(auth)
    } else {
      let r = tm_unsafeWindow.alert('you need to auth bgm.tv_auto_tracker first')
      if (r) {
        tm_openInTab(VARS.authURL, { active: true })
      }
    }
  }

  // inject bilibili
  if (tm_unsafeWindow.location.href.startsWith('https://www.bilibili.com/bangumi/play/')) {
    console.log('inject bilibili')

    // noinspection JSAnnotator
    const injectBilibili = function () {
      const status = tm_unsafeWindow.__INITIAL_STATE__
      const episode = status.epInfo.index
      const bangumiID = status.mediaInfo.season_id

      $('#bangumi_detail > div > div.info-right > div.info-title.clearfix > div.func-module.clearfix').prepend('/* @include ../html/bilibili.min.html */')
      $('#bgm_tv_tracker_episode').html(episode)
      $('#bgm_tv_tracker').data('id', bangumiID)
      tm_addStyle('/* @include ../css/bilibili.min.css */')
      let info = $('.bgm_tv_tracker_info')
      $('.bgm_tv_tracker_btn.bgm_tv_tracker').click(() => {
        info.toggle('fast')
      }).hover(function () {
        $(this).css('background-color', '#00A1D6')
        $(this).css('color', 'white')
      }, function () {
        $(this).css('background-color', 'white')
        $(this).css('color', 'black')
      })
      $('#bgm_tv_tracker_title').html(status.mediaInfo.title)
      requests.get(`${VARS.apiServerURL}/query/bilibili?bangumi_id=${bangumiID}`).then(
        (response) => {
          let subjectID = response.data.bangumi_id || response.data.subject_id

          $('#bgm_tv_tracker_link').html(`<a href="http://bgm.tv/subject/${subjectID}" target="_blank" rel="noopener noreferrer">subject/${subjectID}</a>`)
          $('#bgm_tv_tracker_mark_watched').click(
            () => {
              let eps = $('#bgm_tv_tracker_episode').html()
              collectSubject(subjectID)
              bgmApi.post(`https://api.bgm.tv/subject/${subjectID}/update/watched_eps?watched_eps=${eps}`,
                `watched_eps=${eps}`, {
                  'content-type': 'application/x-www-form-urlencoded',
                  'Authorization': 'Bearer ' + auth.access_token
                })
                .then(
                  (response) => {
                    if (response.data.code === 202) {
                      notify('mark status successful')
                    } else {
                      notify('error: ' + JSON.stringify(response.data))
                    }
                  },
                  error => notify('error: ' + JSON.stringify(error))
                )
            }
          )

          $('#bgm_tv_tracker_mark_watch').click(
            () => {
              watchEpisode({
                subject_id: subjectID,
                'type': 'watch_episode',
                'website': 'bilibili',
                'bangumi_id': $('#bgm_tv_tracker').data('id'),
                'title': $('#bgm_tv_tracker_title').html(),
                episode: $('#bgm_tv_tracker_episode').html()
              })
            }
          )

        },
        (err) => {
          if (err.response.status === 404) {
            $('.bgm_tv_tracker_info').html('没找到你在看的番剧')
          }
        }
      )
      // Your code here...
    }

    injectBilibili()

    let INNER_EPISODE = tm_unsafeWindow.__INITIAL_STATE__.epInfo.index

    // noinspection JSAnnotator
    const onHrefChange = function () {
      const status = tm_unsafeWindow.__INITIAL_STATE__
      const episode = status.epInfo.index
      $('#bgm_tv_tracker_episode').html(episode)
    }

    // noinspection JSAnnotator
    const detectHrefChange = function () {
      console.log('check href')
      if (INNER_EPISODE !== tm_unsafeWindow.__INITIAL_STATE__.epInfo.index) {
        onHrefChange()
        INNER_EPISODE = tm_unsafeWindow.__INITIAL_STATE__.epInfo.index
      }
    }

    setInterval(detectHrefChange, 10 * 1000)
    setTimeout(detectHrefChange, 2000)
  }
})()
