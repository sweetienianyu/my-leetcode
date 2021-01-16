// 459. 重复的子字符串
// https://leetcode-cn.com/problems/repeated-substring-pattern/
let str = 'abaababaab'
var repeatedSubstringPattern = function (s) {
  let n = s.length;
  for (let i = 1; i * 2 <= n; ++i) {
    if (n % i == 0) {
      let match = true;
      for (let j = i; j < n; ++j) {
        if (s.charAt(j) != s.charAt(j - i)) {
          match = false;
          break;
        }
      }
      if (match) {
        return true;
      }
    }
  }
  return false;
}

repeatedSubstringPattern(str)