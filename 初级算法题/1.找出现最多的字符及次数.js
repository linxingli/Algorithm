// 'aabbcccddddeeee'寻找出现次数最多的字符及次数

let str = 'aabbcccddddeeee'

// 方法1
const handler1 = () => {
  let arr = str.split('')
  // 去重
  arr = Array.from(new Set(arr))
  let obj = {}

  // 利用正则+match，找出出现次数
  arr.forEach(v => {
    obj[v] = str.match(new RegExp(v, "g")).length
  })
  // 数组sort排序
  let res = Object.entries(obj).sort((a, b) => {
    return b[1] - a[1]
  })
  console.log('res', res[0])
}
// handler1()

// 方法2
const handler2 = () => {
  let arr = str.split('')
  let obj = arr.reduce((prev, cur) => {
    if (cur in prev) {
      prev[cur]++
    } else {
      prev[cur] = 1
    }
    return prev
  }, {})
  console.log('obj', obj);

  // 数组sort排序
  let res = Object.entries(obj).sort((a, b) => {
    return b[1] - a[1]
  })
  console.log('res', res[0])

}
handler2()