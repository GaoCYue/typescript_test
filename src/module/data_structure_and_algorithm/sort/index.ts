/**
 * 冒泡排序
 * @param arr 被排序的数组，会改变原数组
 */
function bubbleSort<T> (arr: Array<T>):Array<T> {
  const length = arr.length

  if (length <= 1) return arr

  for (let i = 0; i < length; ++i) {
    // 当某次冒泡操作已经没有数据交换时，说明已经达到完全有序
    // 提前退出冒泡循环的标志位
    let flag = false
    for (let j = 0; j < length - i - 1; ++j) {
      // TODO 数据结构需要有一个比较大小的函数
      if (arr[j] > arr[j + 1]) { // 交换
        // TODO 数据结构需要有一个交换位置的函数
        [arr[j], arr[i]] = [arr[i], arr[j]]
        flag = true // 表示有数据交换
      }
    }
    if (!flag) break // 没有数据交换，提前退出
  }
  return arr
}
/**
 * 插入排序的核心思想是将数组分为已排序区间和未排序区间
 * 取未排序区间中的元素，在已排序区间中找到合适的插入位置将其插入
 * @param arr 被排序的数组，会改变原数组
 */
function insertionSort<T> (arr: Array<T>): Array<T> {
  const length = arr.length

  if (length <= 1) return arr

  for (let i = 1; i < length; ++i) {
    const value = arr[i] // 未排序区域的第一个
    let j = i - 1 // 已排序区域的最大值
    // 查找插入的位置
    for (; j >= 0; --j) {
      if (arr[j] > value) { // 查找符合的位置
        arr[j + 1] = arr[j] // 数据移动
      } else {
        break
      }
    }
    arr[j + 1] = value // 插入数据
  }
  return arr
}
/**
 * 插入排序的核心思想是将数组分为已排序区间和未排序区间
 * 从未排序区间中找到最小的元素，将其放到已排序区间的末尾
 * @param arr 被排序的数组，会改变原数组
 */
function selectionSort<T> (arr: Array<T>): Array<T> {
  const length = arr.length

  if (length <= 1) return arr

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i // 假定开始时第一个最小
    for (let j = i + 1; j < length; j++) {
      if (arr[minIndex] > arr[j]) { // 找出循环中最小的元素
        minIndex = j
      }
    }
    if (i !== minIndex) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr
}
/**
 * 归并排序
 * @param arr
 */
function mergeSort<T> (arr: Array<T>): Array<T> {
  const length = arr.length
  if (length <= 1) return arr
  _mergeSort(arr, 0, length - 1)
  return arr
}

function _mergeSort<T> (arr: Array<T>, begin: number, end: number):void {
  if (begin >= end) return
  const middle = Math.floor((begin + end) / 2)
  _mergeSort(arr, begin, middle)
  _mergeSort(arr, middle + 1, end)
  _merge(arr, begin, middle, end)
}
function _merge<T> (arr: Array<T>, begin: number, middle: number, end: number): void{
  const tmp: Array<T> = []
  let i = begin
  let j = middle + 1
  // 双指针循环，直到一个被清空
  while (i <= middle && j <= end) {
    if (arr[i] <= arr[j]) {
      tmp.push(arr[i++])
    } else {
      tmp.push(arr[j++])
    }
  }
  // 找出未被清空的部分
  let start = j
  let ender = end
  if (i < middle) {
    start = i
    ender = middle
  }
  while (start < ender) {
    tmp.push(arr[start++])
  }
  // 重新赋值数组，排序后
  for (let i = 0; i < tmp.length; i++) {
    arr[begin + i] = tmp[i]
  }
}
/**
 * 快速排序
 * @param arr
 */
function quicksort<T> (arr: Array<T>): Array<T> {
  const length = arr.length
  if (length <= 1) return arr
  _quicksort(arr, 0, length - 1)
  return arr
}
function _quicksort<T> (arr: Array<T>, begin:number, end:number): void {
  if (begin >= end) return
  const middle = _partition(arr, begin, end)
  if (middle > begin) { _quicksort(arr, begin, middle - 1) }
  if (middle < end) _quicksort(arr, middle + 1, end)
}

function _partition<T> (arr:Array<T>, begin:number, end:number): number {
  // 随机选择一个目标值
  const targetIndex = begin + Math.floor((end - begin) * Math.random());
  // 将目标值与最后一位调换位置，统一算法后续步骤
  [arr[targetIndex], arr[end]] = [arr[end], arr[targetIndex]]
  // 确定被比较的目标值
  const targetValue = arr[end]
  /**
   * i 表示比目标小的元素区域的后一位
   * 遍历数组找到比targetValue 小的元素，交换位置，i++
   * 遍历结束后，目标数组中比targetValue小的元素全部位于i 的前面
   * 交换i 与arr[end]的位置，此时arr[i]前面比arr[i]小，后面大于等于arr[i]，完成分割，返回i
   *
   * 或者，如果需要将目标元素设置为第一个元素的话，则需要将循环的起始位置设为数组的末尾
   * i 表示比目标小的元素区域的前一位，j 寻找比targetValue 大的元素，交换位置
   * 最后i 后面大于targetValue,i 前面小于等于targetValue，i为targetValue，返回i
   */
  let i = begin // i 表示比 targetValue 大的第一个元素
  for (let j = begin; j <= end; j++) {
    if (arr[j] < targetValue) { // 类似选择排序，将比目标小的插入到前面
      if (i !== j) { [arr[i], arr[j]] = [arr[j], arr[i]] }
      i++
    }
  }
  [arr[i], arr[end]] = [arr[end], arr[i]]
  /**
   * 另一种方法：
   * 目标元素在末尾
   * 可以一头一尾两个指针（i， j），i先动，寻找比targetValue大（=）的元素，找到后i固定，j在动，寻找比i小的元素（注意，j>i）,
   * 找到后交换i和j的位置的元素值。（i先动是因为最后要交换目标值的位置，此时目标值在最后，需要一个大于等于目标值的元素，需要用i来找）
   * i继续向前移动，知道i，j相遇。此时，调换i与末尾位置的元素值，返回i
   *
   * 或者目标元素在头部
   * 可以一头一尾两个指针（i， j），j先动，寻找比targetValue小的元素，找到后j固定，i在动，寻找比i大（=）的元素（注意，j>i）,
   * 找到后交换i和j的位置的元素值。（j先动是因为最后要交换目标值的位置，此时目标值在头部，需要一个小于的元素，需要用j来找）
   * j继续向前移动，知道i，j相遇。此时，调换j与头部位置的元素值，返回j
   */
  return i
}

export {
  bubbleSort, // 冒泡
  insertionSort, // 插入
  selectionSort, // 选择
  mergeSort, // 归并
  quicksort // 快速
}

class SortArray<T> extends Array<T> {
  constructor () {
    super()
  }
}

// const test arr = new Array([1])
