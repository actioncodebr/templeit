import { ERRORS, MESSAGES, TEMPLATES, TEMPLATES_URL } from '@constants'
import * as Utils from '../../../utils/exists-directory'
import shell from 'shelljs'

import Init from '@src/commands/init'

jest.mock('shelljs', () => ({
  exec: jest.fn(),
  cd: jest.fn(),
}))

jest.mock('../../../utils/exists-directory', () => ({
  isDirectory: jest.fn().mockReturnValue(Promise.resolve(true)),
  existsFile: jest.fn().mockReturnValue(Promise.resolve(true)),
}))

describe('Init Command', () => {
  let result: Array<string | Uint8Array> = []
  let sh = jest.spyOn(shell, 'exec')

  beforeEach(() => {
    result = []
    jest.spyOn(process.stdout, 'write').mockImplementation(val => {
      result.push(val)
      return true
    })
  })
  afterEach(() => {
    sh.mockClear()
    jest.restoreAllMocks()
  })

  it('runs init without app name', async () => {
    await Init.run([])

    expect(result[0]).toContain('Missing 1 required arg:')
    expect(result[0]).toContain('name  Name of the app')
  })

  it('runs init with app name that already exists', async () => {
    await Init.run(['qa', '--template=nodejs'])
    const spy = jest.spyOn(Utils, 'isDirectory').mockReturnValue(true as never)

    expect(result[0]).toContain(ERRORS.DIRECTORY_ALREADY_EXISTS)
    spy.mockRestore()
  })

  it('runs init nodejs app properly', async () => {
    await Init.run(['qa', '--template=nodejs'])
    jest.spyOn(Utils, 'isDirectory').mockReturnValueOnce(false)

    expect(sh).toHaveBeenCalledWith(
      `git clone ${TEMPLATES_URL[TEMPLATES.NODE]} qa`,
    )
    expect(sh).toHaveBeenCalledWith('rm -rf .git && git init')
    expect(sh).toHaveBeenCalledWith('npm i')
    expect(result[0]).toContain(MESSAGES.BOOTSTRAPING_APP)

    sh.mockClear()
  })

  it('runs init vuejs app properly', async () => {
    await Init.run(['qa', '--template=vuejs'])
    jest.spyOn(Utils, 'isDirectory').mockReturnValueOnce(false as never)
    jest.spyOn(Utils, 'existsFile').mockImplementation(() => true)

    expect(result[0]).toContain(MESSAGES.BOOTSTRAPING_APP)
    expect(sh).toHaveBeenCalledWith(
      `git clone ${TEMPLATES_URL[TEMPLATES.VUE]} qa`,
    )
    expect(sh).toHaveBeenCalledWith('rm -rf .git && git init')
    expect(sh).toHaveBeenCalledWith('npm i')
  })

  it('run init reactjs properly', async () => {
    await Init.run(['qa', '--template=reactjs'])
    jest.spyOn(Utils, 'isDirectory').mockReturnValueOnce(false as never)

    expect(result[0]).toContain(MESSAGES.BOOTSTRAPING_APP)
    expect(sh).toHaveBeenCalledWith(
      `git clone ${TEMPLATES_URL[TEMPLATES.REACTJS]} qa`,
    )
    expect(sh).toHaveBeenCalledWith('rm -rf .git && git init')

    expect(result[2]).toContain(MESSAGES.INSTALLING_DEPS)

    expect(sh).toHaveBeenCalledWith('npm i')
  })

  it('shows error if passed unknown template', async () => {
    await Init.run(['qa', '--template=gotemplatejs'])
    jest.spyOn(Utils, 'isDirectory').mockReturnValueOnce(false as never)

    expect(result).toContainValue(ERRORS.INVALID_FLAG)

    expect(result).not.toContain(
      expect.arrayContaining([MESSAGES.BOOTSTRAPING_APP]),
    )
    expect(sh).not.toHaveBeenCalledWith(
      `git clone ${TEMPLATES_URL[TEMPLATES.REACTJS]} qa`,
    )
    expect(sh).not.toHaveBeenCalledWith('rm -rf .git && git init')

    expect(result).not.toContain(
      expect.arrayContaining([MESSAGES.INSTALLING_DEPS]),
    )

    expect(sh).not.toHaveBeenCalledWith('npm i')
  })
})
