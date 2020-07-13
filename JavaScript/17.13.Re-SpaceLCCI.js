/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */

var respace = function(dictionary, sentence) {
  const dp=[];
  for (let i = 0 ;i <=sentence.length ;i ++){
      dp[i] = 0;
  }
  for (let i = 1 ;i <= sentence.length ;i++ ){
      dp[i] = (dp[i - 1] || 0) + 1;
      for (let j = 0;j < i ;j++ ){
          if (dictionary.indexOf(sentence.slice(j,i))>=0){
              dp[i] = Math.min(dp[i],dp[j]);
          }
      }
  }
  return dp[sentence.length];
};
respace(["looked","just","like","her","brother"],"jesslookedjustliketimherbrother");


/**
 * 动态规划
 *
 * 状态转移方程：
 * 假设当前我们已经考虑完了前 i 个字符了，对于前 i + 1 个字符对应的最少未匹配数：
 *
 * 第 i + 1 个字符未匹配，则 dp[i + 1] = dp[i] + 1，即不匹配数加 1;
 * 遍历前 i 个字符，若以其中某一个下标 idx 为开头、以第 i + 1 个字符为结尾的字符串正好在词典里，则 dp[i] = min(dp[i], dp[idx]) 更新 dp[i]。
 *
 *
 * 理解起来本质还是迈台阶 只不过有的台阶能迈有的台阶不能迈
 */
