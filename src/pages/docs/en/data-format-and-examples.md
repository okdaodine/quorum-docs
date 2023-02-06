---
title: Data Format and Examples
---

In theory, you can submit data in any format to Quorum.

In order to keep the data consistent between different applications so that they can communicate with each other, the format we recommend is [ActivityPub](https://www.w3.org/TR/activitypub/) which is also used by [Mastodon](https://en.wikipedia.org/wiki/Mastodon_(social_network)).

Next, we formulate the data format and submit it to Quorum through some real scenarios.

---

## Create note

{% tabs %}

{% tab label="Javascript" %}
```javascript
const SDK = require('rum-sdk-nodejs');
const group = SDK.cache.Group.add('rum://...');
SDK.chain.Trx.create({
   data: {
     type: "Create",
     object : {
       type: "Note",
       id: "1",
       content: "hello world",
     }
   },
   groupId: group.groupId,
   privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// Data from chain
{
   "Data": {
     "type": "Create",
     "object": {
       "type": "Note",
       "id": "1",
       "content": "hello world",
     }
   },
   "TrxId": "...",
   "GroupId": "...",
   "TimeStamp": "...",
   "Version": "1.0.0",
   "Expired": 1672284016463,
   "Nonce": 1,
   "SenderPubkey": "...",
   "SenderSign": "..."
}

```

Reference: [ActivityPub#Create](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-create), [ActivityPub#Note](https://www.w3.org/TR/activitystreams- vocabulary/#dfn-note)

## Create note with image

{% tabs %}

{% tab label="Javascript" %}
```javascript
const SDK = require('rum-sdk-nodejs');
const group = SDK.cache.Group.add('rum://...');
SDK.chain.Trx.create({
   data: {
     type: "Create",
     object : {
       type: "Note",
       id: "1",
       content: "hello world",
       image: [{
         type: "Image",
         name: "blue sky",
         mediaType: "image/jpeg"
         content: "data:image/jpeg;base64,/9j/4AA..."
       }]
     }
   },
   groupId: group.groupId,
   privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// Data from chain
{
   "Data": {
     "type": "Create",
     "object": {
       "type": "Note",
       "id": "1",
       "content": "hello world",
       "image": [{
         "type": "Image",
         "name": "blue sky",
         "mediaType": "image/jpeg"
         "content": "data:image/jpeg;base64,/9j/4AA..."
       }]
     }
   },
   "TrxId": "...",
   "GroupId": "...",
   "TimeStamp": "...",
   "Version": "1.0.0",
   "Expired": 1672284016463,
   "Nonce": 1,
   "SenderPubkey": "...",
   "SenderSign": "..."
}

```

Reference: [ActivityPub#Create](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-create), [ActivityPub#Note](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-note), [ActivityPub#Image](https://www.w3.org/TR/activitystreams-vocabulary/#ex80-jsonld)

## Delete note

{% tabs %}

{% tab label="Javascript" %}
```javascript
const SDK = require('rum-sdk-nodejs');
const group = SDK.cache.Group.add('rum://...');
SDK.chain.Trx.create({
   data: {
     type: "Delete",
     object : {
       type: "Note",
       id: "1",
     }
   },
   groupId: group.groupId,
   privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// Data from chain
{
   "Data": {
     "type": "Delete",
     "object": {
       "type": "Note",
       "id": "1",
     }
   },
   "TrxId": "...",
   "GroupId": "...",
   "TimeStamp": "...",
   "Version": "1.0.0",
   "Expired": 1672284016463,
   "Nonce": 1,
   "SenderPubkey": "...",
   "SenderSign": "..."
}

```

Reference: [ActivityPub#Delete](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-delete)

## Update note

{% tabs %}

{% tab label="Javascript" %}
```javascript
const SDK = require('rum-sdk-nodejs');
const group = SDK.cache.Group.add('rum://...');
SDK.chain.Trx.create({
   data: {
     type: "Update",
     object : {
       type: "Note",
       id: "1",
     },
     result: {
       type: "Note",
       content: "hello world (edit)",
     }
   },
   groupId: group.groupId,
   privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// Data from chain
{
   "Data": {
     "type": "Update",
     "object": {
       "type": "Note",
       "id": "1",
     },
     "result": {
       "type": "Note",
       "content": "hello world (edit)",
     }
   },
   "TrxId": "...",
   "GroupId": "...",
   "TimeStamp": "...",
   "Version": "1.0.0",
   "Expired": 1672284016463,
   "Nonce": 1,
   "SenderPubkey": "...",
   "SenderSign": "..."
}

```

Reference: [ActivityPub#Update](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-update)

## Like

{% tabs %}

{% tab label="Javascript" %}
```javascript
const SDK = require('rum-sdk-nodejs');
const group = SDK.cache.Group.add('rum://...');
SDK.chain.Trx.create({
  data: {
    type: "Like",
    object : {
      type: "Note",
      id: "1",
    }
  },
  groupId: group.groupId,
  privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// Data from chain
{
  "Data": {
    "type": "Like",
    "object" : {
      "type": "Note",
      "id": "1",
    }
  },
  "TrxId": "...",
  "GroupId": "...",
  "TimeStamp": "...",
  "Version": "1.0.0",
  "Expired": 1672284016463,
  "Nonce": 1,
  "SenderPubkey": "...",
  "SenderSign": "..."
}

```

参考：[ActivityPub#Like](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-like)

## Dislike

{% tabs %}

{% tab label="Javascript" %}
```javascript
const SDK = require('rum-sdk-nodejs');
const group = SDK.cache.Group.add('rum://...');
SDK.chain.Trx.create({
  data: {
    type: "Dislike",
    object : {
      type: "Note",
      id: "1",
    }
  },
  groupId: group.groupId,
  privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// Data from chain
{
  "Data": {
    "type": "Dislike",
    "object" : {
      "type": "Note",
      "id": "1",
    }
  },
  "TrxId": "...",
  "GroupId": "...",
  "TimeStamp": "...",
  "Version": "1.0.0",
  "Expired": 1672284016463,
  "Nonce": 1,
  "SenderPubkey": "...",
  "SenderSign": "..."
}

```

参考：[ActivityPub#Dislike](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-dislike)

## Comment

{% tabs %}

{% tab label="Javascript" %}
```javascript
const SDK = require('rum-sdk-nodejs');
const group = SDK.cache.Group.add('rum://...');
SDK.chain.Trx.create({
  data: {
    type: "Create",
    object : {
      type: "Note",
      id: "2",
      content: "awesome !!!",
      inreplyto: {
        type: "Note",
        id: "1"
      }
    }
  },
  groupId: group.groupId,
  privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// Data from chain
{
  "Data": {
    "type": "Create",
    "object" : {
      "type": "Note",
      "id": "2",
      "content": "awesome !!!",
      "inreplyto": {
        "type": "Note",
        "id": "1"
      }
    }
  },
  "TrxId": "...",
  "GroupId": "...",
  "TimeStamp": "...",
  "Version": "1.0.0",
  "Expired": 1672284016463,
  "Nonce": 1,
  "SenderPubkey": "...",
  "SenderSign": "..."
}

```

参考：[ActivityPub#Create](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-create), [ActivityPub#inreplyto](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-inreplyto)

## Profile

{% tabs %}

{% tab label="Javascript" %}
```javascript
const SDK = require('rum-sdk-nodejs');
const group = SDK.cache.Group.add('rum://...');
SDK.chain.Trx.create({
  data: {
    type: "Create",
    object : {
      type: "Person",
      id: "user eth address",
      name: "Jack"
    }
  },
  groupId: group.groupId,
  privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// Data from chain
{
  "Data": {
    "type": "Create",
    "object" : {
      "type": "Person",
      "id": "user eth address",
      "name": "Jack"
    }
  },
  "TrxId": "...",
  "GroupId": "...",
  "TimeStamp": "...",
  "Version": "1.0.0",
  "Expired": 1672284016463,
  "Nonce": 1,
  "SenderPubkey": "...",
  "SenderSign": "..."
}

```

参考：[ActivityPub#Create](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-create), [ActivityPub#Person](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-person)

## Follow

{% tabs %}

{% tab label="Javascript" %}
```javascript
const SDK = require('rum-sdk-nodejs');
const group = SDK.cache.Group.add('rum://...');
SDK.chain.Trx.create({
  data: {
    type: "Follow",
    object : {
      type: "Person",
      id: "user eth address",
    }
  },
  groupId: group.groupId,
  privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// Data from chain
{
  "Data": {
    "type": "Follow",
    "object" : {
      "type": "Person",
      "id": "user eth address",
    }
  },
  "TrxId": "...",
  "GroupId": "...",
  "TimeStamp": "...",
  "Version": "1.0.0",
  "Expired": 1672284016463,
  "Nonce": 1,
  "SenderPubkey": "...",
  "SenderSign": "..."
}

```

参考：[ActivityPub#Follow](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-follow), [ActivityPub#Person](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-person)

## Unfollow

{% tabs %}

{% tab label="Javascript" %}
```javascript
const SDK = require('rum-sdk-nodejs');
const group = SDK.cache.Group.add('rum://...');
SDK.chain.Trx.create({
  data: {
    type: "Undo",
    object: {
      type: "Follow",
      object : {
        type: "Person",
        id: "user eth address",
      }
    }
  },
  groupId: group.groupId,
  privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// Data from chain
{
  "Data": {
    "type": "Undo",
    "object": {
      "type": "Follow",
      "object" : {
        "type": "Person",
        "id": "user eth address",
      }
    }
  },
  "TrxId": "...",
  "GroupId": "...",
  "TimeStamp": "...",
  "Version": "1.0.0",
  "Expired": 1672284016463,
  "Nonce": 1,
  "SenderPubkey": "...",
  "SenderSign": "..."
}

```

参考：[ActivityPub#Undo](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-ignore), [ActivityPub#Follow](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-follow), [ActivityPub#Person](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-person)

## Block

{% tabs %}

{% tab label="Javascript" %}
```javascript
const SDK = require('rum-sdk-nodejs');
const group = SDK.cache.Group.add('rum://...');
SDK.chain.Trx.create({
  data: {
    type: "Block",
    object : {
      type: "Person",
      id: "user eth address",
    }
  },
  groupId: group.groupId,
  privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// Data from chain
{
  "Data": {
    "type": "Block",
    "object" : {
      "type": "Person",
      "id": "user eth address",
    }
  },
  "TrxId": "...",
  "GroupId": "...",
  "TimeStamp": "...",
  "Version": "1.0.0",
  "Expired": 1672284016463,
  "Nonce": 1,
  "SenderPubkey": "...",
  "SenderSign": "..."
}

```

参考：[ActivityPub#Block](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-block), [ActivityPub#Person](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-person)

## Unblock

{% tabs %}

{% tab label="Javascript" %}
```javascript
const SDK = require('rum-sdk-nodejs');
const group = SDK.cache.Group.add('rum://...');
SDK.chain.Trx.create({
  data: {
    type: "Undo",
    object: {
      type: "Block",
      object : {
        type: "Person",
        id: "user eth address",
      }
    }
  },
  groupId: group.groupId,
  privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// Data from chain
{
  "Data": {
    "type": "Undo",
    "object": {
      "type": "Block",
      "object" : {
        "type": "Person",
        "id": "user eth address",
      }
    }
  },
  "TrxId": "...",
  "GroupId": "...",
  "TimeStamp": "...",
  "Version": "1.0.0",
  "Expired": 1672284016463,
  "Nonce": 1,
  "SenderPubkey": "...",
  "SenderSign": "..."
}

```

参考：[ActivityPub#Undo](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-ignore), [ActivityPub#Block](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-block), [ActivityPub#Person](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-person)