export {}
declare global {
  namespace jest {
    interface Matchers<R> {
      toContainValue(received: any): R
    }
  }
}
