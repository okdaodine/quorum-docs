---
title: Introduction
---

Quorum is a infrastructure for building decentralized applications.

You can run a Quorum node to store data and fully control your data.

You can also use Quorum to build a decentralized application.

This is an example: 

```javascript
const SDK = require('rum-sdk-nodejs');
const { ethers } = require("ethers");

// create an ethereum wallet
const wallet = ethers.Wallet.createRandom();

// import group seed
const group = SDK.cache.Group.add('rum://...');

// sign data and send trx to group
SDK.chain.Trx.create({
  data: {
    type: "Create",
    object: {
      type: "Note",
      id: "1",
      content: "hello world",
    },
    published: "2022-12-12T12:12:12Z",
  },
  groupId: group.groupId,
  privateKey: wallet.privateKey
});

// get data from the chain
const contents = await SDK.chain.Content.list({
  groupId: group.groupId,
});
console.log(contents);
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
//   "SenderPubkey": "...",
//   "SenderSign": "..."
// }]
```

More examples can be found at [data format and examples](/docs/en/data-format-and-examples/)

## Quorum official website

[https://rumsystem.net](https://rumsystem.net)

## SDK

1. JavaScript SDK for browser: [https://github.com/okdaodine/rum-sdk-browser](https://github.com/okdaodine/rum-sdk-browser)
2. Nodejs SDK: [https://github.com/okdaodine/rum-sdk-nodejs](https://github.com/okdaodine/rum-sdk-nodejs)
3. Ruby SDK: [https://github.com/an-lee/quorum_sdk](https://github.com/an-lee/quorum_sdk)
4. Python SDK: [https://github.com/zhangwm404/quorum-lightnode-py](https://github.com/zhangwm404/quorum-lightnode-py)

## Open source

You can view the source code here. [https://github.com/rumsystem/quorum](https://github.com/rumsystem/quorum)