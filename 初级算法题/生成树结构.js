// 生成树形结构
var source = [{
  id: 1,
  pid: 0,
  name: 'body'
}, {
  id: 2,
  pid: 1,
  name: 'title'
}, {
  id: 3,
  pid: 1,
  name: 'div'
}, {
  id: 4,
  pid: 3,
  name: 'span'
}, {
  id: 5,
  pid: 3,
  name: 'icon'
}, {
  id: 6,
  pid: 4,
  name: 'subspan'
}]

//  {
//   "1": {
//     "id": 1,
//     "pid": 0,
//     "name": "body",
//     "childrens": [{
//         "id": 2,
//         "pid": 1,
//         "name": "title"
//       },
//       {
//         "id": 3,
//         "pid": 1,
//         "name": "div",
//         "childrens": [{
//             "id": 4,
//             "pid": 3,
//             "name": "span",
//             "childrens": [{
//               "id": 6,
//               "pid": 4,
//               "name": "subspan"
//             }]
//           },
//           {
//             "id": 5,
//             "pid": 3,
//             "name": "icon"
//           }
//         ]
//       }
//     ]
//   }
// }

let obj = {}
source.forEach(v => {
  obj[v.id] = v
})

let res = {}
source.forEach(v => {
  if (obj[v.pid]) {
    if (obj[v.pid].childrens) {
      obj[v.pid].childrens.push(v)
    } else {
      obj[v.pid].childrens = [v]
    }
  } else {
    res[v.id] = v
  }
})
console.info('res', res)