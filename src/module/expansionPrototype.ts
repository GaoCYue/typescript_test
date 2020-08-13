/* eslint-disable no-extend-native */
import { accAdd, accSub, accMul, accDiv } from './expansionPrototype/number'
declare global {
    interface Number {
        accAdd(arg: number): number
        accSub(arg: number): number
        accMul(arg: number): number
        accDiv(arg: number): number
    }
}

Number.prototype.accAdd = function (arg) {
  return accAdd(this as number, arg)
}
Number.prototype.accSub = function (arg) {
  return accSub(this as number, arg)
}
Number.prototype.accMul = function (arg) {
  return accMul(this as number, arg)
}
Number.prototype.accDiv = function (arg) {
  return accDiv(this as number, arg)
}
