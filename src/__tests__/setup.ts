import { expect } from '@jest/globals'

expect.extend({
  toContainValue(received: any, item: any) {
    const has = received.includes((exp: any) => exp === item.trim())

    received.forEach((a: any) => {
      console.log('a => ', a)
      console.log('item ==> ', item)

      console.log('has item ?? ', a == item.trim())
    })

    if (has) {
      return {
        message: () => `${received} includes ${item}`,
        pass: true,
      }
    }

    return {
      message: () => `expected $ {received} includes "${item}"`,
      pass: false,
    }
  },
})
