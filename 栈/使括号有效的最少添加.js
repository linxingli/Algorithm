/**
 * 
 * 示例 1：

  输入："())"
  输出：1
  复制代码
  示例 2：

  输入："((("
  输出：3
  复制代码
  示例 3：

  输入："()"
  输出：0
 */

var minAddToMakeValid = (s) => {
  let stack = []
  for(i of s) {
    console.log(i)
    if (stack.length && stack[stack.length - 1] === "(" && i === ")") {
      stack.pop()
    } else {
      stack.push(i)
    }
  }
  console.log("stack", stack);
  console.log("stack.length", stack.length);
  return stack.length
}
minAddToMakeValid('())')