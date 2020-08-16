/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let result;
    for (let i = 0 ;i < 3 ;i ++){
        let tmpMax;
        let index;
        for (let j = 0 ;j < nums.length ;j ++)
        {
            if (tmpMax == null || nums[j] > tmpMax){
                tmpMax = nums[j];
                index = j;
            }
        }

        console.log(index);
        if (i == 0 && nums.length < 3){
            return nums[index];
        }
        console.log(index)
        nums = nums.slice(index,1);
        console.log(nums);
        if (i == 2) return nums[index]
    }
};
thirdMax([1,2,4,5,6,1])