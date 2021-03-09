/**
 * 解题思路
    双指针做法，我们需要枚举所有情况，有一点贪心的思想，每次我们得看短的板子让我们容纳的面积。
    每次都选择左右指针最短的那个板子，计算出当前容纳的最多的水，然后从短的板子指针出发向内缩，这样不断求，
    最终我们可以枚举所有情况，自然可以枚举出最大容器面积。
 * @param {number[]}
 * @return {number}
 */
var maxArea = (nums) => {
    let len = nums.length
    let L = 0
    let R = len - 1
    let res = 0
    while (L < R) {
        if (nums[L] > nums[R]) {
            // 记录此时的面积 (最短的*间隔)
            let ans = nums[R] * (R - L)
            res = Math.max(ans, res)
            // 如果左边大于右边的，则右边R向内缩，向左移动
            R--
        } else if (nums[L] <= nums[R]) {
            // 记录此时的面积
            let ans = nums[L] * (R - L)
            res = Math.max(ans, res)
            // 如果左边小于右边的，则左边L向内缩，向右移动
            L++
        }
    }
    console.log('res', res)
    return res
}

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])