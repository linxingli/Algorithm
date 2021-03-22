/**
 *
 * 示例 1：
    输入：s = "lee(t(c)o)de)"
    输出："lee(t(c)o)de"
    解释："lee(t(co)de)" , "lee(t(c)ode)" 也是一个可行答案。

示例 3：
    输入：s = "))(("
    输出：""
    解释：空字符串也是有效的
 *
 */

var xxx = (str) => {
    let stack = []
    let len = str.length
    let map = {}
    // 获取只包含括号的map，并记录在str的位置
    for (let i = 0; i < len; i++) {
        if (['(', ')'].includes(str[i])) {
            map[i] = str[i]
        }
    }
    // map如下
    // {
    //     3: '(',
    //     5: '(',
    //     7: ')',
    //     9: ')',
    //     12: ')',
    // }
    Object.keys(map).forEach(v => {
        // 获取stack
        if (stack.length && stack[stack.length - 1].val === '(' && map[v] === ')') {
            stack.pop()
        } else {
            stack.push({
                index: v,
                val: map[v]
            })
        }
    })
    // stack排个序，从大的索引开始删除（避免删完错位）
    stack = stack.sort((a, b) => b.index - a.index)
    let arr = str.split('')
    stack.forEach(v => {
        arr.splice(v.index, 1)
    })
    str = arr.join('')
    return str
}

xxx('lee(t(c)o)de))')