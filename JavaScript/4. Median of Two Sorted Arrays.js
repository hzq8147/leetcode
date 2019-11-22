/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
   let len=nums1.length+nums2.length;
   let s=[];
   let i=0;j=0;
   let lenOfResult=parseInt(len/2)+1;
   while(s.length< lenOfResult){
	   	if (i < nums1.length && j < nums2.length){
	   		if (nums1[i] >nums2[j])
	   		{
	   			s.push(nums2[j]);
	   			j++;
	   		}else{
	   			s.push(nums1[i]);
	   			i++;
	   		}
	   }else{
	   		if(i<nums1.length){
	   			s.push(nums1[i]);
	   			i++;
	   		}
	   		if (j<nums2.length){
	   			s.push(nums2[j]);
	   			j++;
	   		}
	   }
  }
  let result;
  if (len % 2 ==0){
  	result= (s[lenOfResult - 1]+s[lenOfResult - 2])/2;
  }else{
  	result=s[lenOfResult - 1];
  }
  console.log(result);
  return result;
};

findMedianSortedArrays([1,3],[2]);

/**
*	何为中位数
*	有序数组的合并 归并-归并排序？
*	时间复杂度O(log(m+n))
*/