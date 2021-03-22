/**
 * 题目描述:
    给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。
    给定的字符串只含有小写英文字母，并且长度不超过10000。

    示例 1:
    输入: "abab"
    输出: True
    解释: 可由子字符串 "ab" 重复两次构成。

    示例 2:
    输入: "aba"
    输出: False
 *
  解题思路：
    对于样例字符串，看是否由字符串的其中一个子串重复构成，我们可以将原字符串与自己拼接一次，
    然后从原字符串第1位（从0开始）找，看是否会找到拼接之后的字符串起始位，即 s.length 处，
    那么就不存在重复构成这样情况，否则，就存在，返回 True。
 *
 */

/**
 * 正解如下：
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    return (s + s).indexOf(s, 1) !== s.length
};

// leetCode报警这个解法超出时间限制了
var isRepeat = (str) => {
    let len = str.length
    let flag = false
    let s = ''
    if (len > 1) {
        for (let i = 0; i < len / 2; i++) {
            s += str[i]
            let pattern = `(${s}){${len / s.length}}`
            let reg = new RegExp(pattern)
            if (reg.test(str)) {
                flag = true
                break
            }
        }
    }
    console.log('flag', flag)
    return flag
}
isRepeat('a')