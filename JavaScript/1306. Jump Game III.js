/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    const step = [];
    const search = (index)=>{
        step[index] = 1;
        console.log(index);
        if (arr[index] == 0) return true;
        if (index + arr[index] < arr.length){
            if (step[index + arr[index]] != 1 ){
                let res = search(index + arr[index]);
                if (res) return true;
            }
        } 
        if (index - arr[index] >= 0){
            if (step[index - arr[index]] != 1 ){
                return search(index - arr[index]);
            }
        }
        return false;
    }
    return search(start);
};

/**
*   BFS&DFS
*   广度优先搜索 & 深度优先搜索    
*/