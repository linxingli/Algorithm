var letterCombinations = function (digits) {
    if (!digits.length) return []
    const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };
    let queue = []
    queue.push('')
    for (let i = 0; i < digits.length; i++) {
        let size = queue.length
        while (size--) {
            let cur = queue.shift()
            let str = map[digits[i]]
            for (let j = 0; j < str.length; j++) {
                queue.push(cur + str[j])
            }
        }
    }
    console.log('queue', queue)
    return queue
}
letterCombinations('2345')