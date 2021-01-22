// 种花问题
// 问题抽象 数学建模 动态输入
// 写代码前 抽象出程序逻辑 找出循环不变式
// 数学建模 种植花区域 没种植花区域 0 1表示
// 动态输入 模拟大量数据找出规律以及校验逻辑 以边界条件判断缜密性
// var canPlaceFlowers = function(flowerbed, n) {
//     let max = 0;
//     for(let i = 0,len = flowerbed.length - 1; i<len; i++) {
//         if(flowerbed[i] === 0) {
//             if(i === 0 && flowerbed[1] === 0) {
//                 max++
//                 i++;
//             }else if(flowerbed[i - 1] === 0 && flowerbed[i+1] === 0) {
//                 max++;
//                 i++;
//             }
//         }
//     }
//     return max >= n
// };

// 贪心算法 并不是一个很优质的解法
var canPlaceFlowers = function(flowerbed, n) {
    for(let i  = 0; i<flowerbed.length; i++) {
      if(n <= 0) {
        return true
      }
      if(flowerbed[i] === 1) { // 如果已经种花了 就不能再种了
        continue
      }
      if(i > 0 && flowerbed[i - 1] === 1) { //上一个格子种过花了
        continue
      }
      if(i < flowerbed.length - 1 && flowerbed[i + 1] === 1) { // 下个格子种过花了 则当前这个格子不能种花
        continue
      }
      // 可以种花了 并且记录次数
      flowerbed[i] = 1
      n--

    }
    return n >= 0
};
// canPlaceFlowers([1,0,0,0,1], 2)
