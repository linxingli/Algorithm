// 需求
// 需求描述起来很简单，有这样三个数组：
// let names = ["iPhone X", "iPhone XS"]
// let colors = ["黑色", "白色"]
// let storages = ["64g", "256g"]
// 复制代码需要把他们的所有组合穷举出来，最终得到这样一个数组：
// [
//   ["iPhone X", "黑色", "64g"],
//   ["iPhone X", "黑色", "256g"],
//   ["iPhone X", "白色", "64g"],
//   ["iPhone X", "白色", "256g"],
//   ["iPhone XS", "黑色", "64g"],
//   ["iPhone XS", "黑色", "256g"],
//   ["iPhone XS", "白色", "64g"],
//   ["iPhone XS", "白色", "256g"],
// ]


// 实现：

let names = ["iPhone X", "iPhone XS"]

let colors = ["黑色", "白色"]

let storages = ["64g", "256g"]

const handler = (...chunks) => {
  let res = []
  let helper = (index, prev) => {
    let isLast = index === chunks.length - 1
    let chunk = chunks[index]

    chunk.forEach(v => {
      let cur = prev.concat(v)
      if (isLast) {
        res.push(cur)
      } else {
        helper(index + 1, cur)
      }
    })

  }
  helper(0, [])
  console.log('res', res)

}

handler(names, colors, storages)