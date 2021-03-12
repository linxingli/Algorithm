/**
 * 题目描述
    字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一个字母只会出现在其中的一个片段。
    返回一个表示每个字符串片段的长度的列表。
    
    示例 1：
    输入：S = "ababcbacadefegdehijhklij"
    输出：[9,7,8]

    解释：
    划分结果为 "ababcbaca", "defegde", "hijhklij"。
    每个字母最多出现在一个片段中。
    像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。
 * 
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
    let map = {}; // 用来统计当前字母最远位置
    for (let i = 0; i < S.length; i++) {
        map[S[i]] = i; // 存储当前字母当前位置
    }
    console.log('map', map)
    let start = 0; // 头指针
    let res = [];
    let maxLen = 0;
    for (let i = 0; i < S.length; i++) {
        let curMaxLen = map[S[i]];
        maxLen = Math.max(maxLen, curMaxLen); // 计算出当前区间范围是否还可以继续扩大区间
        if (i === maxLen) {
            let tmp = i - start + 1;
            start = i + 1;
            res.push(tmp);  // 划分片段
        }
    }
    return res;
}

partitionLabels('ababcbacadefegdehijhklij')