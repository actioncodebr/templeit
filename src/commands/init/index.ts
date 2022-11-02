import { Command, Flags } from '@oclif/core'
import { exec } from 'shelljs'
import * as utils from '../../utils'
import { ERRORS, MESSAGES, TEMPLATES_URL } from '../../constants'

export default class Init extends Command {
  static description = 'Bootstraps a Templeit app'

  static examples = [`$ templeit init myapp --template=nodejs`]

  static flags = {
    template: Flags.string({
      char: 't',
      description: 'Template app: Nodejs, Vuejs, Reactjs',
      required: true,
    }),
  }

  static args = [
    { name: 'name', description: 'Name of the app', required: true },
  ]

  async run(): Promise<void> {
    try {
      const { args, flags } = await this.parse(Init)
      if (utils.isDirectory(`./${args.name}`)) {
        return this.log(ERRORS.DIRECTORY_ALREADY_EXISTS)
      }

      this.log(`${MESSAGES.BOOTSTRAPING_APP} ${args.name}`)

      exec(`git clone ${TEMPLATES_URL[flags.template]} ${args.name}`)
      exec('rm -rf .git && git init')

      this.log(`${MESSAGES.BOOTSTRAP_DONE}`)
      this.log(`${MESSAGES.INSTALLING_DEPS}`)
      if (utils.existsFile('package-lock.json')) {
        exec(`cd ${args.name} && npm i`)
      } else {
        exec(`cd ${args.name} && yarn`)
      }
    } catch (error) {
      return this.log(error as any)
    }
  }
}
