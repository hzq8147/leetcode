/**
 * @param {number[][]} obstacleGrid
 * @return {number[][]}
 */
var pathWithObstacles = function(obstacleGrid) {
    const yLength = obstacleGrid[0] && obstacleGrid[0].length;
    const xLength = obstacleGrid.length;
    const search = (x,y,path) =>{
        if (obstacleGrid[x][y] == 0){
            path = path.concat([[x,y]]);
            obstacleGrid[x][y] = 2;
        }else{
            return [];
        }
        if ( x == xLength - 1 && y == yLength -1){
            return path;
        }
        if (obstacleGrid[x][y+1] != null && obstacleGrid[x][y+1] == 0){
            const res = search(x,y+1,path);
            if (res.length > 0){
                return res;
            }
        }
        if (obstacleGrid[x+1] != null && obstacleGrid[x+1][y] == 0){
            const res = search(x+1,y,path);
            if (res.length > 0){
                return res;
            }
        }
        return [];
    }
    return search(0,0,[])
};
console.log(pathWithObstacles([
[0,0,0],
  [0,0,1],
  [0,0,0]
]))
/**
 * 纯种dfs
 * 没写visited会超时
 * 向右向下也需要写visited 可以提高很多效率！！！
 */