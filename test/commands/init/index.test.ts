import { expect, test } from '@oclif/test'

describe('init', () => {
  test
    .stdout()
    .command(['init'])
    .it('runs init without app name', ctx => {
      expect(ctx.stdout).to.contain('You must pass an AppName/Path')
    })

  test
    .stdout()
    .command(['init', '--name=qa'])
    .it('runs init with app name that already exists', ctx => {
      expect(ctx.stdout).to.contain('Folder/Path already exists')
    })

  test
    .stdout()
    .command(['init', '--name=qa'])
    .it('run init properly', ctx => {
      expect(ctx.stdout).to.contain('Starting new templeit app')
    })
})
