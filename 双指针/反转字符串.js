/**
 * @param {string[]} nums
 * @return {string[]}
 * 输入：["h","e","l","l","o"]
   输出：["o","l","l","e","h"]
 */
var reverseString = (nums) => {
    let len = nums.length
    let L = 0
    let R = len - 1
    while (L < R) {
        [nums[L], nums[R]] = [nums[R], nums[L]]
        L++
        R--
    }
    console.log();

    return nums
}

reverseString(["h", "e", "l", "l", "o"])