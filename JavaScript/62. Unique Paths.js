/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let a = [];
    for (let i = 0 ;i < m;i++){
        a[i] = [];
        for (let j = 0 ;j < n ;j++){
            a[i][j] = (i === 0 || j === 0) ? 1 : a[i][j] = a[i-1][j] + a[i][j-1];
        }
    }
    return a[m-1][n-1];
};

/**
 *	动态规划
 *  填数游戏
 *  二维上台阶
 */
