/** 三数字之和为0的三元组
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeNum = (nums) => {
    // 从小到大排序一波
    nums = nums.sort((a, b) => a - b)
    let res = []
    let len = nums.length
    for (let i = 0; i < len - 2; i++) {
        let L = i + 1
        let R = len - 1
        if (nums[i] > 0) break; // 从小到大的数组，如果第一项都大于0就无需计算了
        // 当前项nums[i]与上一项相等时就忽略，避免重复添加
        //（这是判断基数是否相等(基数：三元组里面的第一个数字，因为从小到大排序的数组如果有连续相等的数字去遍历判断出来的LR就是重复的)）
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        while (L < R) {
            let sum = nums[i] + nums[L] + nums[R]
            if (sum === 0) {
                res.push([nums[i], nums[L], nums[R]])
                // 继续向内缩小范围
                // 一个优化点， 如果L和R在缩小后和下一次相等，则忽略计算，避免重复添加
                while (L < R && nums[L] === nums[L + 1]) L++; // 这里判断数组内的L元素是否相等（因为基数一样，L一样的话R就会一样）
                while (L < R && nums[R] === nums[R - 1]) R--;
                L++
                R--
            } else if (sum < 0) {
                // 说明nums[L]太小了，L向右移动
                L++
            } else if (sum > 0) {
                // 说明nums[R]太大了，R向左移动
                R--
            }
        }
    }
    return res
}
threeNum([-1, 0, 1, 2, 1, 2, -1, -1, 1 - 4])

/**
 * 题目描述:
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，
 * 使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 *
 * 输入：nums = [-1,2,1,-4], target = 1
  输出：2
  解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = (nums, target) => {
    nums = nums.sort((a, b) => a - b)
    let res = nums[0] + nums[1] + nums[2] // 先获取一个默认结果
    let len = nums.length
    for (let i = 0; i < len - 1; i++) {
        let L = i + 1
        let R = len - 1
        while (L < R) {
            // 获取最接近的数组之和
            let sum = nums[i] + nums[L] + nums[R]
            if (Math.abs(sum - target) < Math.abs(res - target)) {
                res = sum
            }

            // 有序数组向内缩减范围
            if (sum > target) {
                // 偏大，R要往左移
                R--
            } else {
                // 偏小，L往右移
                L++
            }
        }
    }
    return res
}
threeSumClosest([-1, 2, 1, -4], 1)