// 00110011
var s = '10101'  
// var countBinarySubstrings = function(s) {
//   let count = 0;
//   s = s.split('')
//   for(let i = 0 ;i<s.length-1; i++) {
//     if(s[i] !== s[i+1]) {
//       count++
//     }else {
//       let repeat = 1
//       let next = i+1
//       while(s[next] === s[i]) {
//         repeat++
//         next++
//       }
//       let tmp = s[next]
//       let flag = false
//       for(let j = next;j<next+repeat;j++) {
//         if(s[j] && s[j] === tmp) {
//           flag = true
//         }else {
//           flag = false
//         }
//       }
//       if(flag) {
//         count++
//       }
//     }
//   }
//   return count
// }
var countBinarySubstrings = function(s) {
  const counts = [];
  let ptr = 0, n = s.length;
  while (ptr < n) {
      const c = s.charAt(ptr);
      let count = 0;
      while (ptr < n && s.charAt(ptr) === c) {
          ++ptr;
          ++count;
      }
      counts.push(count);
  }
  let ans = 0;
  for (let i = 1; i < counts.length; ++i) {
      ans += Math.min(counts[i], counts[i - 1]);
  }
  return ans;
};
countBinarySubstrings(s)