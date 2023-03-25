---
title: Run a fullnode
---

Introducing how to run a fullnode

---

## What is fullnode?

A fullnode is a user who owns a pair of keys and connects to the `p2p network`.

## Get the quorum binary

{% tabs %}

{% tab label="Compile" %}
See [Build quorum from source code](/docs/build-quorum)
{% /tab %}

{% tab label="Download" %}
{% /tab %}

{% /tabs %}

## Run a fullnode

```shell
RUM_KSPASSWD=123 ./quorum fullnode \
    --keystoredir rum/keystore \
    --configdir rum/config \
    --datadir rum/data \
    --peer=/ip4/101.42.141.118/tcp/62777/p2p/16Uiu2HAm9uziCEHprbzJoBdG9uktUQSYuFY58eW7o5Dz7rKhRn2j \
    --peer=/ip4/94.23.17.189/tcp/62777/p2p/16Uiu2HAm5waftP3s4oE1EzGF2SyWeK726P5B8BSgFJqSiz6xScGz \
    --listen /ip4/0.0.0.0/tcp/7002 \
    --apiport 8002 \
    --loglevel info
```

### Parameter Description

#### Common parameters

- `--peername` node name; default: `peer`
- `--configdir` directory to store configuration files; default value: `./config`
- `--datadir` directory to store data files; default: `./data`
- `--keystoredir` the directory where the keystore is stored; default: `./keystore`
- `--keystorename` name of the keystore; default: `default`
- `--keystorepass` keystore password; if not specified, it will prompt for input when starting
- `--peer` specifies the address of `bootstrap`, you can specify multiple addresses, for example: `--peer /ip4/94.23.17.189/tcp/10666/p2p/16Uiu2HAmGTcDnhj3KVQUwVx8SGLyKBXQwfAxNayJdEwfsnUYKK4u --peer /ip4/132.145.109.109. 10666/p2p/16Uiu2HAmTovb8kAJiYK8saskzz7cRQhb45NRK5AsbtdmYsLfD3RM`
- `--listen` listening address, you can specify multiple times, for example: `--listen /ip4/127.0.0.1/tcp/4215 --listen /ip/127.0.0.1/tcp/5215/ws`
- `rest api` parameters
   - `--apihost` specifies the `ip` or `domain name` of the `rest api` service
   - `--apiport` specifies the `rest api` service listening port
- `--bootstrap` whether to start the `bootstrap` node

#### Log related parameters

- `--loglevel` set the log level, optional values: `debug`, `info`, `error`; the default is `error`
- `--logfile` can specify the path of the log file; the default is to print to standard output
   - `--log-max-size` How much hard disk space a single log file can occupy at most, unit: megabytes; default is `100m`
   - `--log-max-age` How long to keep log files at most, and how long to keep old log files at most; default 7 days
   - `--log-max-backups` how many log files there can be; default is 3
   - `--log-compress` sets whether log files are automatically compressed; default compression

### View help

```shell
./quorum --help
```

```
An open source peer-to-peer application infrastructure to offer the internet alternatives in a decentralized and privacy oriented way.

Usage:
  quorum [command]

Available Commands:
  backup      Backup rum data
  completion  Generate the autocompletion script for the specified shell
  fullnode    Run fullnode
  help        Help about any command
  jwt         A jwt tool, create or parse jwt
  lightnode   Run lightnode
  ping        Ping peer
  relaynode   Run relaynode
  restore     Restore rum data from backup file
  rumfile     A tool to upload and download files from rum network
  update      Update rum
  version     Show version

Flags:
  -h, --help                  help for quorum
      --log-compress          is log file compress (default true)
      --log-max-age int       log file max ages, unit: day (default 7)
      --log-max-backups int   log file max backups count (default 3)
      --log-max-size int      log file max size, unit: megabytes (default 100)
      --logfile string        log file, default output to stdout
      --loglevel string       log level (default "error")

Use "quorum [command] --help" for more information about a command.
```

### See help for subcommands

Run `quorum [command] --help` to view the help information of subcommands.
