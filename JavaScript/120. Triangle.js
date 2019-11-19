/**
 * @param {number[][]} triangle
 * @return {number}
 */

 /**
 *自上而下
 */
var minimumTotal = function(triangle) {
  let result=[[]];
  result[0][0]=triangle[0][0];
  let min;
  for (let i=1;i<triangle.length;i++){
  	result[i]=[];
  		for (let j=0;j<triangle[i].length;j++){
  			if (j==0){
  				result[i][j]=result[i-1][j]+triangle[i][j];
  			}else if (j==triangle[i].length-1){
  				result[i][j]=result[i-1][j-1] + triangle[i][j];
  			}else{
  				if (result[i-1][j-1] + triangle[i][j] <= result[i-1][j] + triangle[i][j])
  					result[i][j]=result[i-1][j-1] + triangle[i][j];
  				else
  					result[i][j]=result[i-1][j] + triangle[i][j];
  			}
  			if (i == triangle.length - 1){
  				if (min===undefined || min >= result[i][j]){
  					min = result[i][j];
  				}
  			}
  		}
  }
  if (min===undefined){
  	min=result[0][0];
  }
  return min ;
};

/**
 *	动态规划
 *	状态
 */

 /**
 * 自下而上简洁很多O(n)
 */

var  minimumTotal=function(triangle){
	for (let i=triangle.length - 2 ;i >= 0 ;i--){
		for (let j=0;j<=i;j++){
			triangle[i][j]=triangle[i+1][j]+triangle[i][j] >triangle[i+1][j+1] + triangle[i][j] ? triangle[i+1][j+1] + triangle[i][j] : triangle[i+1][j]+triangle[i][j];
		}
	}
	return triangle[0][0];
}
minimunTotal([
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]);