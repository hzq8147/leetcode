/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash={};
    for (let i=0;i<nums.length;i++){
        let need=target-nums[i];
        if (hash[need]!==undefined) return [hash[need],i];
        hash[nums[i]]=i;
    }
}

