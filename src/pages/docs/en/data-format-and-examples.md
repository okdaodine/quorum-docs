---
title: Data format and examples
---

Generally, you can send data to Quorum in any form.

In order to keep the data consistent between different applications so that they can communicate with each other, the format we recommend is [ActivityPub](https://www.w3.org/TR/activitypub/) which is also used by [Mastodon](https://en.wikipedia.org/wiki/Mastodon_(social_network)).

Here is some examples.

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
     },
     published: "2022-12-12T12:12:12Z",
   },
   groupId: group.groupId,
   privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// Data from the chain
{
   "Data": {
     "type": "Create",
     "object": {
       "type": "Note",
       "id": "1",
       "content": "hello world",
     },
     "published": "2022-12-12T12:12:12Z",
   },
   "TrxId": "...",
   "GroupId": "...",
   "Version": "2.0.0",
   "SenderPubkey": "...",
   "SenderSign": "..."
}

```

Refer to: [ActivityPub#Create](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-create), [ActivityPub#Note](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-note)

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
       }, {
        type: "Image",
        url: "https://example.org/cat.png"
      }]
     },
     published: "2022-12-12T12:12:12Z",
   },
   groupId: group.groupId,
   privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// Data from the chain
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
       }, {
        "type": "Image",
        "url": "https://example.org/cat.png"
      }]
     },
     "published": "2022-12-12T12:12:12Z",
   },
   "TrxId": "...",
   "GroupId": "...",
   "Version": "2.0.0",
   "SenderPubkey": "...",
   "SenderSign": "..."
}

```

Refer to: [ActivityPub#Create](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-create), [ActivityPub#Note](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-note), [ActivityPub#Image](https://www.w3.org/TR/activitystreams-vocabulary/#ex80-jsonld)

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
     },
     published: "2022-12-12T12:12:12Z",
   },
   groupId: group.groupId,
   privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// Data from the chain
{
   "Data": {
     "type": "Delete",
     "object": {
       "type": "Note",
       "id": "1",
     },
     "published": "2022-12-12T12:12:12Z",
   },
   "TrxId": "...",
   "GroupId": "...",
   "Version": "2.0.0",
   "SenderPubkey": "...",
   "SenderSign": "..."
}

```

Refer to: [ActivityPub#Delete](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-delete)

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
     },
     published: "2022-12-12T12:12:12Z",
   },
   groupId: group.groupId,
   privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// Data from the chain
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
     },
     "published": "2022-12-12T12:12:12Z",
   },
   "TrxId": "...",
   "GroupId": "...",
   "Version": "2.0.0",
   "SenderPubkey": "...",
   "SenderSign": "..."
}

```

Refer to: [ActivityPub#Update](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-update)

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
    },
    published: "2022-12-12T12:12:12Z",
  },
  groupId: group.groupId,
  privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// Data from the chain
{
  "Data": {
    "type": "Like",
    "object" : {
      "type": "Note",
      "id": "1",
    },
    "published": "2022-12-12T12:12:12Z",
  },
  "TrxId": "...",
  "GroupId": "...",
  "Version": "2.0.0",
  "SenderPubkey": "...",
  "SenderSign": "..."
}

```

Refer to: [ActivityPub#Like](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-like)

## Undo like

{% tabs %}

{% tab label="Javascript" %}
```javascript
const SDK = require('rum-sdk-nodejs');
const group = SDK.cache.Group.add('rum://...');
SDK.chain.Trx.create({
  data: {
    type: 'Undo',
    object: {
      type: "Like",
      object : {
        type: "Note",
        id: "1",
      }
    },
    published: "2022-12-12T12:12:12Z",
  },
  groupId: group.groupId,
  privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// Data from the chain
{
  "Data": {
    "type": "Undo",
    "object": {
      "type": "Like",
      "object" : {
        "type": "Note",
        "id": "1",
      }
    },
    "published": "2022-12-12T12:12:12Z",
  },
  "TrxId": "...",
  "GroupId": "...",
  "Version": "2.0.0",
  "SenderPubkey": "...",
  "SenderSign": "..."
}

```

参考：[ActivityPub#Undo](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-undo), [ActivityPub#Like](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-like)

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
    },
    published: "2022-12-12T12:12:12Z",
  },
  groupId: group.groupId,
  privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// Data from the chain
{
  "Data": {
    "type": "Dislike",
    "object" : {
      "type": "Note",
      "id": "1",
    },
    "published": "2022-12-12T12:12:12Z",
  },
  "TrxId": "...",
  "GroupId": "...",
  "Version": "2.0.0",
  "SenderPubkey": "...",
  "SenderSign": "..."
}

```

Refer to: [ActivityPub#Dislike](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-dislike)

## Undo dislike

{% tabs %}

{% tab label="Javascript" %}
```javascript
const SDK = require('rum-sdk-nodejs');
const group = SDK.cache.Group.add('rum://...');
SDK.chain.Trx.create({
  data: {
    type: "Undo",
    object: {
      type: "Dislike",
      object : {
        type: "Note",
        id: "1",
      }
    },
    published: "2022-12-12T12:12:12Z",
  },
  groupId: group.groupId,
  privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// Data from the chain
{
  "Data": {
    "type": "Undo",
    "object": {
      "type": "Dislike",
      "object" : {
        "type": "Note",
        "id": "1",
      }
    },
    "published": "2022-12-12T12:12:12Z",
  },
  "TrxId": "...",
  "GroupId": "...",
  "Version": "2.0.0",
  "SenderPubkey": "...",
  "SenderSign": "..."
}

```

参考：[ActivityPub#Undo](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-undo), [ActivityPub#Dislike](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-dislike)

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
    },
    published: "2022-12-12T12:12:12Z",
  },
  groupId: group.groupId,
  privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// Data from the chain
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
    },
    "published": "2022-12-12T12:12:12Z",
  },
  "TrxId": "...",
  "GroupId": "...",
  "Version": "2.0.0",
  "SenderPubkey": "...",
  "SenderSign": "..."
}

```

Refer to: [ActivityPub#Create](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-create), [ActivityPub#inreplyto](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-inreplyto)

## Profile

{% tabs %}

{% tab label="Javascript" %}
```javascript
const SDK = require('rum-sdk-nodejs');
const group = SDK.cache.Group.add('rum://...');
SDK.chain.Trx.create({
  data: {
    type: "Create",
    object: {
      type: "Profile",
      name: "Jack",
      image: {
        type: "Image",
        mediaType: "image/jpeg",
        content: "data:image/jpeg;base64,/9j/4AA..."
      },
      describes: {
        type: "Person",
        id: "user eth address"
      }
    },
    published: "2022-12-12T12:12:12Z",
  },
  groupId: group.groupId,
  privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// Data from the chain
{
  "Data": {
    "type": "Create",
    "object": {
      "type": "Profile",
      "name": "Jack",
      "image": {
        "type": "Image",
        "mediaType": "image/jpeg",
        "content": "data:image/jpeg;base64,/9j/4AA..."
      },
      "describes": {
        "type": "Person",
        "id": "user eth address"
      }
    },
    "published": "2022-12-12T12:12:12Z",
  },
  "TrxId": "...",
  "GroupId": "...",
  "Version": "2.0.0",
  "SenderPubkey": "...",
  "SenderSign": "..."
}

```

Refer to: [ActivityPub#Create](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-create), [ActivityPub#Profile](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-person)

## Retweet

{% tabs %}

{% tab label="Javascript" %}

```javascript
const SDK = require('rum-sdk-nodejs')
const group = SDK.cache.Group.add('rum://...')
SDK.chain.Trx.create({
  data: {
    type: 'Create',
    object: {
      type: 'Note',
      id: '2',
      content: 'Awesome 👇👇',
      object: {
        type: 'Note',
        id: '1',
      },
    },
    published: "2022-12-12T12:12:12Z",
  },
  groupId: group.groupId,
  privateKey: '...',
})
```

{% /tab %}

{% /tabs %}

```json
// Data from the chain
{
  "Data": {
    "type": "Create",
    "object": {
      "type": "Note",
      "id": "2",
      "content": "Awesome 👇👇",
      "object": {
        "type": "Note",
        "id": "1",
      },
    },
    "published": "2022-12-12T12:12:12Z",
  },
  "TrxId": "...",
  "GroupId": "...",
  "Version": "2.0.0",
  "TimeStamp" "1680526868853218300",
  "SenderPubkey": "...",
  "SenderSign": "..."
}
```

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
    },
    published: "2022-12-12T12:12:12Z",
  },
  groupId: group.groupId,
  privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// Data from the chain
{
  "Data": {
    "type": "Follow",
    "object" : {
      "type": "Person",
      "id": "user eth address",
    },
    "published": "2022-12-12T12:12:12Z",
  },
  "TrxId": "...",
  "GroupId": "...",
  "Version": "2.0.0",
  "SenderPubkey": "...",
  "SenderSign": "..."
}

```

Refer to: [ActivityPub#Follow](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-follow), [ActivityPub#Person](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-person)

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
    },
    published: "2022-12-12T12:12:12Z",
  },
  groupId: group.groupId,
  privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// Data from the chain
{
  "Data": {
    "type": "Undo",
    "object": {
      "type": "Follow",
      "object" : {
        "type": "Person",
        "id": "user eth address",
      }
    },
    "published": "2022-12-12T12:12:12Z",
  },
  "TrxId": "...",
  "GroupId": "...",
  "Version": "2.0.0",
  "SenderPubkey": "...",
  "SenderSign": "..."
}

```

Refer to: [ActivityPub#Undo](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-undo), [ActivityPub#Follow](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-follow), [ActivityPub#Person](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-person)

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
    },
    published: "2022-12-12T12:12:12Z",
  },
  groupId: group.groupId,
  privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// Data from the chain
{
  "Data": {
    "type": "Block",
    "object" : {
      "type": "Person",
      "id": "user eth address",
    },
    "published": "2022-12-12T12:12:12Z",
  },
  "TrxId": "...",
  "GroupId": "...",
  "Version": "2.0.0",
  "SenderPubkey": "...",
  "SenderSign": "..."
}

```

Refer to: [ActivityPub#Block](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-block), [ActivityPub#Person](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-person)

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
    },
    published: "2022-12-12T12:12:12Z",
  },
  groupId: group.groupId,
  privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// Data from the chain
{
  "Data": {
    "type": "Undo",
    "object": {
      "type": "Block",
      "object" : {
        "type": "Person",
        "id": "user eth address",
      }
    },
    "published": "2022-12-12T12:12:12Z",
  },
  "TrxId": "...",
  "GroupId": "...",
  "Version": "2.0.0",
  "SenderPubkey": "...",
  "SenderSign": "..."
}

```

Refer to: [ActivityPub#Undo](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-undo), [ActivityPub#Block](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-block), [ActivityPub#Person](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-person)