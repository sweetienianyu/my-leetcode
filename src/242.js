// 242. 有效的字母异位词
// https://leetcode-cn.com/problems/valid-anagram/
// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
// example1
// 输入: s = "anagram", t = "nagaram"
// 输出: true

// example2
// 输入: s = "rat", t = "car"
// 输出: false

// 方法1
var isAnagram = function(s, t) {
  function count(letter) {
    const obj = {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
      g: 0,
      h: 0,
      i: 0,
      j: 0,
      k: 0,
      l: 0,
      m: 0,
      n: 0,
      o: 0,
      p: 0,
      q: 0,
      r: 0,
      s: 0,
      t: 0,
      u: 0,
      v: 0,
      w: 0,
      x: 0,
      y: 0,
      z: 0
    }
    for(let w of letter) {
      if(obj.hasOwnProperty(w)) {
        obj[w]++
      }
    }
    return obj
  }
  const r1 = JSON.stringify(count(s))
  const r2 = JSON.stringify(count(t))
  return r1 === r2
};


// 方法2
var isAnagram1 = function(s, t) {
  return s.length == t.length && [...s].sort().join('') === [...t].sort().join('')
};


// 方法3
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
      return false;
  }
  const table = new Array(26).fill(0);
  for (let i = 0; i < s.length; ++i) {
      table[s.codePointAt(i) - 'a'.codePointAt(0)]++;
  }
  for (let i = 0; i < t.length; ++i) {
      table[t.codePointAt(i) - 'a'.codePointAt(0)]--;
      if (table[t.codePointAt(i) - 'a'.codePointAt(0)] < 0) {
          return false;
      }
  }
  return true;
};

