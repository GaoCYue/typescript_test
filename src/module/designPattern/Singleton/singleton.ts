export default class Singleton {
  static getInstance (): Singleton {
    return Singleton.instance
  }

  private static instance: Singleton = new Singleton();

  private constructor () {}
}
