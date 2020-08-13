import Singleton from './singleton'

test('测试单例模式', () => {
  expect(Singleton.getInstance()).toEqual(Singleton.getInstance())
})
