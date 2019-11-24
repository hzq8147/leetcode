/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let a=[];
  a[1]=1;
  a[2]=2;
  for (let i=3;i<=n;i++)  {
  	a[i]=a[i-1] + a[i-2];
  }
  return a[n];
};

/**
 *	动态规划 
 * 斐波那契数列
 */