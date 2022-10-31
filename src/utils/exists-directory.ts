import { existsSync } from 'node:fs'

export const isDirectory = (pathName: string): boolean => {
  return existsSync(`./${pathName}`)
}

export const existsFile = (fileName: string): boolean => {
  return existsSync(`./${fileName}`)
}
