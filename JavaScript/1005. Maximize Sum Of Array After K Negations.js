/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
    let sortNum = nums.sort((a,b)=>a-b);
    let n = k;
    let result = 0;
    sortNum.forEach((num,idx)=>{
        if (num < 0 && n > 0){
            n--;
            sortNum[idx] = Math.abs(num);
        }
        result += sortNum[idx];
    })

    if (n > 0 && n % 2 == 1) {
        sortNum = sortNum.sort((a, b) => a - b);
        result += -2 * sortNum[0];
    }
    return result;
};
console.log(largestSumAfterKNegations([-8, 3, -5, -3, -5, -2],6))
/**
 * 贪心
 */