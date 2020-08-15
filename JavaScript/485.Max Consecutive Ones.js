/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let result = 0,tmp = 0;
    nums.forEach(num => {
        if (num === 1){
            tmp ++;
            if (tmp > result) result = tmp;
        }else {
            tmp = 0;
        }
    })

    return result;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));