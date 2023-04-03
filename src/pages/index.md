---
title: 概述
---

Quorum 是一个给去中心化应用提供存储的基础设施。

作为用户，您可以运行 Quorum 节点来存储数据，从而 100% 地掌握你自己的数据。

作为开发者，您可以基于 Quorum 打造一个去中心化的应用程序。

那么，我们如何往 Quorum 节点上面存储数据呢？

{% tabs %}

{% tab label="javascript" %}

```javascript
const SDK = require('rum-sdk-nodejs')
const { ethers } = require('ethers')

// create an ethereum wallet
const wallet = ethers.Wallet.createRandom()

// import group seed
const group = SDK.cache.Group.add('rum://...')

// sign data and send trx to group
SDK.chain.Trx.create({
  data: {
    type: 'Create',
    object: {
      type: 'Note',
      id: '1',
      content: 'hello world',
    },
    published: "2022-12-12T12:12:12Z",
  },
  groupId: group.groupId,
  privateKey: wallet.privateKey,
})

// get data from chain
const contents = await SDK.chain.Content.list({
  groupId: group.groupId,
})
console.log(contents)
// [{
//   "Data": {
//     "type": "Create",
//     "object" : {
//       "type": "Note",
//       "id": "1",
//       "content": "hello world",
//     },
//     "published": "2022-12-12T12:12:12Z",
//   },
//   "TrxId": "...",
//   "GroupId": "...",
//   "Version": "2.0.0",
//   "TimeStamp" "1680526868853218300",
//   "SenderPubkey": "...",
//   "SenderSign": "..."
// }]
```

{% /tab %}

{% tab label="python" %}

```python
"""
pip install -U quorum-lightnode eth-keys
"""
import secrets

import eth_keys
from lightnode import LightNode
from lightnode.utils import pretty_print

lightnode = LightNode("/tmp/lightnode")
group_id = "group uuid4 id"
private_key = eth_keys.keys.PrivateKey(secrets.token_bytes(32)).to_bytes()

def send_trx():
    obj = {
        "type": "Create",
        "object": {
            "type": "Note",
            "id": "1",
            "content": "hello world",
        },
    }
    pretty_print(lightnode.post_to_group(group_id, private_key, obj))

if __name__ == "__main__":
    send_trx()
```

{% /tab %}

{% /tabs %}
更多的例子您可以参考[格式说明和例子](/docs/data-format-and-examples/)

## 官方网站

Quorum official website [https://rumsystem.net](https://rumsystem.net)

## SDK

1. JavaScript SDK (browser): [https://github.com/okdaodine/rum-sdk-browser](https://github.com/okdaodine/rum-sdk-browser)
2. Nodejs SDK: [https://github.com/okdaodine/rum-sdk-nodejs](https://github.com/okdaodine/rum-sdk-nodejs)
3. Ruby SDK: [https://github.com/an-lee/quorum_sdk](https://github.com/an-lee/quorum_sdk)
4. Python SDK: [quorum-lightnode](https://pypi.org/project/quorum-lightnode/)

如果你想知道如何开发 Quorum SDK，查看 [如何编写一个 Quorum SDK ?](/docs/build-sdk)

## 开源

Quorum 是开源的，您可以到这里查看源代码 [https://github.com/rumsystem/quorum](https://github.com/rumsystem/quorum)
