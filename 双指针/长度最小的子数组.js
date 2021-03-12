/**
 * 题目描述
    给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，
    并返回其长度。如果不存在符合条件的子数组，返回 0。

示例：
    输入：s = 7, nums = [2,3,1,2,4,3]
    输出：2
    解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 *
 * @param {Number[]} nums
 * @param {Number} s
 * @return {Object}
 */

var smallerArr = (nums, s) => {
    let res = {
        val: Infinity,
        arrIndex: null
    } // 存放满足sum >= s条件的数组
    let len = nums.length
    let L = 0, R = 0, sum = 0
    while (R < len) {
        // 计算sum
        sum += nums[R]
        // 如果满足sum >= s条件，则L继续右移，尝试减少范围去判断
        while (sum >= s) {
            res = {
                val: Math.min(res.val, (R - L + 1)),
                arrIndex: [L, R] // 记录满足条件的数组索引
            }
            // 更新计算sum
            sum -= nums[L]
            L++
        }
        R++
    }
    console.log('smallerArr', res)
    return res
}

smallerArr([2, 3, 1, 2, 4, 3], 7)