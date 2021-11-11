/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let tmp = 0 ;
    while (nums[tmp] != target && start < end && end > tmp){
        if (nums[tmp] > target) {
            end = tmp;
        }else {
            start = tmp;
        }
        tmp = (start + end) % 2 == 0 ? (start + end) / 2 : (start + end + 1) /2;
    } 
    return nums[tmp] == target ? tmp : nums[start] == target ? start : -1;
};
console.log(search([2,5,3,4,6],6));
/**
 * 太丑了
 * 
 */