import { expect as jestExpect } from '@jest/globals'
import { expect, test } from '@oclif/test'
import { ERRORS, MESSAGES, TEMPLATES, TEMPLATES_URL } from '@constants'
import * as Utils from '../../../utils/exists-directory'
import shell from 'shelljs'

jest.mock('shelljs', () => ({
  exec: jest.fn(),
}))

jest.mock('../../../utils/exists-directory', () => ({
  isDirectory: jest.fn().mockReturnValue(Promise.resolve(true)),
  existsFile: jest.fn().mockReturnValue(Promise.resolve(true)),
}))

describe('init', () => {
  test
    .stdout()
    .command(['init', '--template=nodejs'])
    .it('runs init without app name', ctx => {
      expect(ctx.stdout).to.contain('Missing 1 required arg:')
      expect(ctx.stdout).to.contain('name  Name of the app')
    })

  test
    .stdout()
    .command(['init', 'qa', '--template=nodejs'])
    .it('runs init with app name that already exists', ctx => {
      const spy = jest
        .spyOn(Utils, 'isDirectory')
        .mockReturnValue(true as never)

      expect(ctx.stdout).to.contain(ERRORS.DIRECTORY_ALREADY_EXISTS)

      spy.mockReset()
    })

  test
    .stdout()
    .command(['init', 'qa', '--template=nodejs'])
    .it('run init nodejs app properly', ctx => {
      jest.spyOn(Utils, 'isDirectory').mockReturnValueOnce(false)

      expect(ctx.stdout).to.contain(MESSAGES.BOOTSTRAPING_APP)
      jestExpect(jest.spyOn(shell, 'exec')).toHaveBeenCalledWith(
        `git clone ${TEMPLATES_URL[TEMPLATES.NODE]} qa`,
      )
      jestExpect(jest.spyOn(shell, 'exec')).toHaveBeenCalledWith(
        'rm -rf .git && git init',
      )
      jestExpect(jest.spyOn(shell, 'exec')).toHaveBeenCalledWith('npm i')
    })
  test
    .stdout()
    .command(['init', 'qa', '--template=vuejs'])
    .it('run init vuejs app properly', ctx => {
      jest.spyOn(Utils, 'isDirectory').mockReturnValueOnce(false as never)
      jest.spyOn(Utils, 'existsFile').mockImplementation(() => true)

      expect(ctx.stdout).to.contain(MESSAGES.BOOTSTRAPING_APP)
      jestExpect(jest.spyOn(shell, 'exec')).toHaveBeenCalledWith(
        `git clone ${TEMPLATES_URL[TEMPLATES.VUE]} qa`,
      )
      jestExpect(jest.spyOn(shell, 'exec')).toHaveBeenCalledWith(
        'rm -rf .git && git init',
      )
      jestExpect(jest.spyOn(shell, 'exec')).toHaveBeenCalledWith('npm i')
    })
  test
    .stdout()
    .command(['init', 'qa', '--template=reactjs'])
    .it('run init reactjs properly', ctx => {
      jest.spyOn(Utils, 'isDirectory').mockReturnValueOnce(false as never)

      expect(ctx.stdout).to.contain(MESSAGES.BOOTSTRAPING_APP)
      jestExpect(jest.spyOn(shell, 'exec')).toHaveBeenCalledWith(
        `git clone ${TEMPLATES_URL[TEMPLATES.REACTJS]} qa`,
      )
      jestExpect(jest.spyOn(shell, 'exec')).toHaveBeenCalledWith(
        'rm -rf .git && git init',
      )

      expect(ctx.stdout).to.contain(MESSAGES.INSTALLING_DEPS)

      jestExpect(jest.spyOn(shell, 'exec')).toHaveBeenCalledWith('npm i')
    })
})
