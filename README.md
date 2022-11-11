# TempleIT

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

<!-- toc -->
* [TempleIT](#templeit)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g templeit
$ templeit COMMAND
running command...
$ templeit (--version)
templeit/1.0.9 linux-x64 node-v14.19.2
$ templeit --help [COMMAND]
USAGE
  $ templeit COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`templeit init NAME`](#templeit-init-name)

## `templeit init NAME`

Bootstraps a Templeit app

```
USAGE
  $ templeit init [NAME] -t <value>

ARGUMENTS
  NAME  Name of the app

FLAGS
  -t, --template=<value>  (required) Template app: Nodejs, Vuejs, Reactjs

DESCRIPTION
  Bootstraps a Templeit app

EXAMPLES
  $ templeit init myapp --template=nodejs
```

_See code: [dist/commands/init/index.ts](https://github.com/actioncodebr/templeit/blob/v1.0.9/dist/commands/init/index.ts)_
<!-- commandsstop -->

- [`templeit init APP_NAME --template=<template_type>`](#templeit-init)
- [`templeit help [COMMAND]`](#templeit-help-command)

## `templeit init`

```
USAGE
  $ npx templeit init [APP_NAME] --template=<nodejs|vuejs|reactjs>

ARGUMENTS
  APP_NAME  Name of your new application

FLAGS
  -t, --template=<value>  (required) What stack your new app is based

```
