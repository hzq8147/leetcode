/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement1 = function(nums1, nums2) {
    const indexs = {};
    const resArray = [];
    for (let key of nums1){
        let res = -1;
        for (let i = nums2.indexOf(key); i < nums2.length ;i++){
            if (nums2[i] > key) {
                res = nums2[i];
                break;
            }
        }
        resArray.push(res);
    }
    return resArray;
};
var nextGreaterElement = function(nums1, nums2) {
    const stack = [];
    const map = {};
    for (let i = nums2.length -1;i >= 0 ;i--){
        let tmp = stack.length - 1;
        while(nums2[i] > stack[tmp] && tmp >= 0){ 
            stack.pop();
            tmp = stack.length - 1;
        }
        map[nums2[i]] = stack.length > 0 ? stack[tmp] : -1;
        stack.push(nums2[i]);
    }
    const res = nums1.map(num=>{
        return map[num];
    })
    return res;
};
console.log(nextGreaterElement([2,5,3,1],[2,5,3,6,8,4,7,1]))

/**
 * 1、 暴力
 * 2、单调栈 + hash表 O(nums1.length + nums2.length)
 * （一旦要求下一个更大的元素 考虑单调栈）
 *  从右向左遍历，比栈下面的大，就pop，比栈下面小就push。
 *  形成从上到下 从小到大的单调栈
 */