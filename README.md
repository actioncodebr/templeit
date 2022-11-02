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
templeit/1.0.2 darwin-x64 node-v18.12.0
$ templeit --help [COMMAND]
USAGE
  $ templeit COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`templeit help [COMMAND]`](#templeit-help-command)
* [`templeit init NAME`](#templeit-init-name)
* [`templeit plugins`](#templeit-plugins)
* [`templeit plugins:install PLUGIN...`](#templeit-pluginsinstall-plugin)
* [`templeit plugins:inspect PLUGIN...`](#templeit-pluginsinspect-plugin)
* [`templeit plugins:install PLUGIN...`](#templeit-pluginsinstall-plugin-1)
* [`templeit plugins:link PLUGIN`](#templeit-pluginslink-plugin)
* [`templeit plugins:uninstall PLUGIN...`](#templeit-pluginsuninstall-plugin)
* [`templeit plugins:uninstall PLUGIN...`](#templeit-pluginsuninstall-plugin-1)
* [`templeit plugins:uninstall PLUGIN...`](#templeit-pluginsuninstall-plugin-2)
* [`templeit plugins update`](#templeit-plugins-update)

## `templeit help [COMMAND]`

Display help for templeit.

```
USAGE
  $ templeit help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for templeit.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.16/src/commands/help.ts)_

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

_See code: [dist/commands/init/index.ts](https://github.com/actioncodebr/templeit/blob/v1.0.2/dist/commands/init/index.ts)_

## `templeit plugins`

List installed plugins.

```
USAGE
  $ templeit plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ templeit plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.5/src/commands/plugins/index.ts)_

## `templeit plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ templeit plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ templeit plugins add

EXAMPLES
  $ templeit plugins:install myplugin 

  $ templeit plugins:install https://github.com/someuser/someplugin

  $ templeit plugins:install someuser/someplugin
```

## `templeit plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ templeit plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ templeit plugins:inspect myplugin
```

## `templeit plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ templeit plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ templeit plugins add

EXAMPLES
  $ templeit plugins:install myplugin 

  $ templeit plugins:install https://github.com/someuser/someplugin

  $ templeit plugins:install someuser/someplugin
```

## `templeit plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ templeit plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ templeit plugins:link myplugin
```

## `templeit plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ templeit plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ templeit plugins unlink
  $ templeit plugins remove
```

## `templeit plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ templeit plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ templeit plugins unlink
  $ templeit plugins remove
```

## `templeit plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ templeit plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ templeit plugins unlink
  $ templeit plugins remove
```

## `templeit plugins update`

Update installed plugins.

```
USAGE
  $ templeit plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
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
