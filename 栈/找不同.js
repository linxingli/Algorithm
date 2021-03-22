/**
 * 输入 xxx('123456', '12344455556')
 * 输出 1234(44)5(555)6
 */

var xxx = (str, strNew) => {
   let strNewLen = strNew.length
   let tagIndex = 0
   let res = ''
   let diffFlag = false
   for (let i = 0; i < strNewLen; i++) {
      if (strNew[i] === str[tagIndex]) {
         tagIndex++
         if (diffFlag) {
            // res = res + "</span>"
            res = res + ")"
         }
         diffFlag = false
         res = res + strNew[i]
      } else {
         //  字符出现差异
         if (!diffFlag) {
            // res = res + `<span style="color: 'red'">`
            res = res + `(`
         }
         res = res + strNew[i]
         diffFlag = true
      }
   }
   console.log('res', res)

   return res
}

// xxx('123456', '12344455556')
xxx('我和小马', 'xxx我我我我和xxxx小明')
// 1234(44)5(555)6