---
title: Build quorum from source code
---

Build quorum from source code

---

## Golang

`Quorum` is developed in `Golang`, so it is necessary to prepare the `Golang` environment before building `Quorum`.

### Install

`quorum` support `go 1.19.x`

{% tabs %}

{% tab label="macOS" %}

```shell
brew install go
```

{% /tab %}

{% tab label="Ubuntu" %}

```shell
sudo add-apt-repository ppa:longsleep/golang-backports
sudo apt update
sudo apt install golang-go
```

[More ways to install](https://github.com/golang/go/wiki/Ubuntu)
{% /tab %}

{% tab label="Arch Linux" %}

```shell
sudo pacman -Sy go
```

{% /tab %}

{% tab label="Other" %}
参考：[Download and install](https://go.dev/doc/install)
{% /tab %}

{% /tabs %}

### Environment

{% tabs %}
{% tab label="*nix" %}

```shell
export GO_HOME=$HOME/go
export GOPATH=$GO_HOME
export PATH=$GO_HOME/bin:$PATH
export GO111MODULE=on
```

{% /tab %}
{% /tabs %}

### Image mirror

If your network is not affected by this, there is no need to make this setting.

```shell
export GOPROXY=https://goproxy.cn,direct
```

## Get the code

```shell
git clone https://github.com/rumsystem/quorum.git
```

## build

```shell
cd quorum
go build -o quorum main.go
```

You can also build by `make` command

{% tabs %}

{% tab label="macOS" %}

```shell
make darwin
```

{% /tab %}

{% tab label="Linux" %}

```shell
make linux
```

{% /tab %}

{% tab label="Windows" %}

```shell
make windows
```

{% /tab %}

{% tab label="FreeBSD" %}

```shell
make freebsd
```

{% /tab %}
{% /tabs %}

## Swagger document

`swagger` document provides all  `rest api` of `quorum`.

### generate `swagger` document

```shell
make gen-doc
```

### See `swagger` document

```shell
make serve-doc
```

Open: [http://localhost:1323/swagger/index.html](http://localhost:1323/swagger/index.html)
