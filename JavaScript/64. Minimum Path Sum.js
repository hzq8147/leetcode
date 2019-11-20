/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  for (let i = 0 ; i < grid.length ; i++){
  	for (let j =0 ;j < grid[i].length; j++){
  			if (i > 0 || j > 0){
  				if (j==0)
  					{
  						grid[i][j]+=grid[i-1][j];
  						continue;
  					}
  				if (i==0)
  					{
  						grid[i][j]+=grid[i][j-1];
  						continue;
  					}
  				grid[i][j]=grid[i-1][j] > grid[i][j-1] ? grid[i][j-1]+grid[i][j] : grid[i-1][j]+grid[i][j];
  			}
  	}
  }
  console.log(grid[grid.length-1][grid[grid.length-1].length - 1]);
  return grid[grid.length-1][grid[grid.length-1].length - 1];
};
minPathSum([
  [1,3,1],
  [1,5,1],
  [4,2,1]
]);

/**
*	动态规划
*   同120.Triangle
*/