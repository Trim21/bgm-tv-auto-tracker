# bilibili bangumi progress auto tracker

暂定这么个名字吧

## 介绍

在b站看番剧的同时一键在bgm.tv上标记已经看过的集数.


## 使用

https://greasyfork.org/zh-CN/scripts/369643-bgm-tv-auto-tracker 

安装后去 
[https://bgm.tv/oauth/authorize](https://bgm.tv/oauth/authorize?client_id=bgm2775b2797b4d958b&response_type=code&redirect_uri=https://bangumi-auto-tracker.trim21.cn/oauth_callback)
进行授权 

效果图 

![](./screenshot/bilibili.png) 

PS: 有添加 271 和优酷支持的计划, 但是具体什么时候能加上就看心情了...(

## 开发

现在bangumi提供了官方api,又可以继续施工了.

bilibili部分已经完工了

欢迎贡献代码

## 数据收集

为了把版权站的视频(分集)和bgm.tv的番剧对应起来,
所以会收集用户看过的番剧所在的网页的一些变量信息.
