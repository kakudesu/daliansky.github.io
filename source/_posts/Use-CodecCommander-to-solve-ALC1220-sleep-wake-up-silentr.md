---
title: 使用CodecCommander解决ALC1220唤醒无声
urlname: Use-CodecCommander-to-solve-ALC1220-sleep-wake-up-silentr
date: 2017-08-18 22:56:17
updated: 2017-08-28 11:08:02
categories:
- 驱动
tags:
- AppleALC
- CC
- CodecCommander
---

# 使用CodecCommander解决ALC1220唤醒无声
## AppleALC info.plist
f0111141 10401190 20100101 30600101 00001740 4090a090 60908102 50308101 70402102 29e6e740 90614b01

## 解决过程
1. 整理pinconfig:
   屏蔽掉节点0x1a line in rear，使用f0111141，拆分为01a71cf0 01a71d11 01a71e11 01a71f41进行屏蔽
2. 整理出两条cc命令：
    01970724 01b70883
3. 编译CodecCommander，增加10ec_1220，添加ALC1220，将两条cc命令添加进去

| 10ec_1220 | String | Realtek ALC1220 |
| --- | --- | --- |

Custom Commands

| Command | Data | 01970724 |
| --- | --- | --- |
|Commont|String|0x19 SET_PIN_WIDGET_CONTROL 0x24|
|On Init|Boolean|YES|
|On Sleep|Boolean|NO|
|ON Wake|Boolean|YES|

| Command | Data | 01b70883 |
| --- | --- | --- |
|Commont|String|0x1b SET_UNSOLICITED_ENABLE 0x83|
|On Init|Boolean|YES|
|On Sleep|Boolean|NO|
|ON Wake|Boolean|YES|

| Perform Reset | Boolean | YES |
| ------- | ------- | ------- |
||||
更多`hda-verb`的用法请前往[hda-verb参数详表](https://blog.daliansky.net/hda-verb-parameter-detail-table.html)

## 收工

# 关于打赏
您的支持就是我更新的动力！
如果不希望看到博主停更的话，请点击下方的 `打赏` 支持一下，有钱的捧个钱场，没钱的捧个人场，谢谢大家！


