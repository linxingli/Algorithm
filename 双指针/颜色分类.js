/**
 * 题目描述:
    给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
    此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
    注意: 不能使用代码库中的排序函数来解决这道题。

    示例:
    输入: [2,0,2,1,1,0]
    输出: [0,0,1,1,2,2]
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let len = nums.length;
    let L = 0;
    let R = len - 1;
    let i = 0;
    while (i <= R) {
        if (nums[i] == 0) { // 当前值为0，那么就和左边指针进行交换
            [nums[i], nums[L]] = [nums[L], nums[i]];
            L++;
            i++;
        } else if (nums[i] == 2) { // 当前值为2，那么就和右边指针进行交换
            [nums[i], nums[R]] = [nums[R], nums[i]];
            R--;
        } else {
            i++;
        }
    }
    console.log('sortColors', nums)
    return nums
}

sortColors([2, 0, 2, 1, 1, 0])