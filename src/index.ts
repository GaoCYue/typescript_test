import './module'

const app = document.getElementById('app')
const appStyle = window.getComputedStyle(app as Element)
console.log(appStyle)

const testAdd = 0.1
const testSub = 1.5
const testMul = 19.9
const testDiv = 0.3

console.log(testAdd.accAdd(0.2))
console.log(testSub.accSub(1.2))
console.log(testMul.accMul(100))
console.log(testDiv.accDiv(0.1))
