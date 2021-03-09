/**
 * 解题思路 https://juejin.cn/post/6931631220841250823#heading-11
    这个存放水，我们就需要看左边两边指针的柱子看谁的高度小了，当前是看高度小的了。
    以左边为例：当前柱子存水量 = 最近最高柱子高度（只看左边到当前柱子） - 当前柱子高度
    右边同理。
 * 
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let len = height.length;
    let L = 0, R = len - 1;
    let leftHeight = 0, rightHeight = 0;
    let res = 0;
    while (L < R) {
        if (height[L] < height[R]) { // 左边高度小，当然看左边
            leftHeight = Math.max(leftHeight, height[L]);
            res += leftHeight - height[L]; // 当前柱子能存放的水
            L++;
        } else { // 右边高度小，看右边
            rightHeight = Math.max(rightHeight, height[R]);
            res += rightHeight - height[R]; // 当前柱子能存放的水
            R--;
        }
    }
    console.log('trap', res);
    return res;
}

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])