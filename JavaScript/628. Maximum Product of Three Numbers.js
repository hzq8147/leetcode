/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    const tmp = [];
    const minTmp = [];
    let isMinus = false;
    for (let i = 0 ;i < nums.length ;i ++){
        if (minTmp.length < 2){
            minTmp.push(nums[i]);
        }else {
            let maxIndex; ;
            for (let j = 0; j < minTmp.length; j++) {
                if (maxIndex == null || minTmp[maxIndex] < minTmp[j]){
                    maxIndex = j;
                };
            }
            if (minTmp[maxIndex] > nums[i]){
                minTmp[maxIndex] = nums[i];
            }
        }
        if (minTmp[0] < 0 && minTmp[1] < 0){
            isMinus = true;
        }else {
            isMinus = false;
        }

        if (tmp.length < 3){
            tmp.push(nums[i]);
        }else {
            let minIndex; ;
            for (let j = 0; j < tmp.length; j++) {
                if (minIndex == null || tmp[minIndex] > tmp[j]){
                    minIndex = j;
                };
            }
            if (tmp[minIndex] < nums[i])
                tmp[minIndex] = nums[i];
        }
    }
    tmp.sort((a,b)=>a-b);
    let result ;
    for (let i = 0 ;i < tmp.length;i++){
        if (result != null) {
            result = result * tmp[i];
        }else {
            result = tmp[i];
        }
    }
    result =isMinus ? result > minTmp[0] * minTmp[1] * tmp[tmp.length - 1] ? result : minTmp[0] * minTmp[1] * tmp[tmp.length - 1] : result;
    return result;
};
maximumProduct([-200,-100,-2,1,2,3]);

/**
 *
 * 找俩最小的和找三个最大值。
 * 两个最小值如果都是负数： 和最大值相乘后与三个最大值相乘比较大小
 **/