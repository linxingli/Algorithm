/**
 *
 * 题目描述
    你的朋友正在使用键盘输入他的名字 name。偶尔，在键入字符 c 时，按键可能会被长按，而字符可能被输入 1 次或多次。
    你将会检查键盘输入的字符 typed。如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回 True。
 *
 * 示例 1：
    输入：name = "alex", typed = "aaleex"
    输出：true
    解释：'alex' 中的 'a' 和 'e' 被长按。
   示例 2：
    输入：name = "saeed", typed = "ssaaedd"
    输出：false
    解释：'e' 一定需要被键入两次，但在 typed 的输出中不是这样。

    解题思路:
        显而易见，采用双指针做法，通过 cnt 计数统计字符匹配成功个数，然后通过双指针进行比较匹配，其中有几个地方注意一下：
        如果 typed 和 name 的当前索引前一位都不相等的话，那么名字就不对应，直接跳出去，这里算是小小的优化了一下。
        当 typed 走完才能跳出去，如果是 i == n  就跳出去的话，这种情况：name：abc | typed：abcd 就会判断出错
 */

// leetCode过不了。。
var test = (name, typed) => {

    var strToObj = (str) => {
        let obj = {}
        let temp = ''
        str.split('').forEach(v => {
            if (v !== temp) {
                obj[v] = 1
                temp = v
            } else {
                obj[v]++
            }
        })
        return obj
    }
    let nameObj = strToObj(name)
    let typedObj = strToObj(typed)
    // 对比
    let flag = true
    Object.keys(nameObj).forEach(v => {
        if (typedObj[v] < nameObj[v]) {
            flag = false
        }
    })
    // console.log('flag', flag)
    return flag
}
// test('alex', 'aaleex')

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    let n = name.length; // 求出字符串长度
    let m = typed.length;
    let cnt = 0; // 统计匹配成功个数
    let i = 0, j = 0; // 双指针
    let flag = false; // 判断是否中途遇到不匹配阶段
    while (1) {
        if (name[i] == typed[j]) { // 匹配成功
            i++, cnt++, j++;
        } else {
            // 输入：name = "sae ed", typed = "ssaae dd"
            if (typed[j] == name[i - 1]) {
                j++;
            } else {
                // 如果 typed 和 name 当前索引前一位都不相等的话，那么名字就不对应，直接跳出去
                flag = true;
            }
        }
        if (flag) break;
        if (j == m) break; // 当 typed走完才能跳出去，如果是 i == n  就跳出去的话，这种情况：abc | abcd 就会判断出错
    }
    if (cnt === n && j === m) return true;
    else return false;
}