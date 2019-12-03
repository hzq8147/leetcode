/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  	let result='';
  	for (let i = 0;i < s.length;i++){
  		let mid = s.charAt(i);
  		let tmp =1;
  		let left=s.charAt(i-tmp);
  		let right=s.charAt(i+tmp);
  		let leftIndex=i;
  		let rightIndex=i;
  		if (right == mid){
  			//和右侧对比，看是否有两个中心的情况
  			let tmpString=s.slice(i,i+tmp+1);
  			if (tmpString.length >=result.length)
  				result=tmpString;
  			rightIndex=i+tmp;
  		}else if(result.length<=1){
  			result=mid;
  		}
  		if (leftIndex!=rightIndex){
  			//计算两个中心的情况
	  		while(rightIndex+tmp < s.length && leftIndex-tmp >= 0){
	  			right=s.charAt(rightIndex+tmp);
	  			left=s.charAt(leftIndex-tmp);
	  			if (left == right){
	  				let tmpString=s.slice(leftIndex-tmp,rightIndex+tmp+1);
					if (tmpString.length > result.length){
						result=tmpString;
					}
	  				tmp++;
	  			}else{
	  				break;
	  			}
	  		}
  		}
  		tmp=1;
  		while(i+tmp < s.length && i-tmp >= 0){
  			//计算单个中心的情况
  			right=s.charAt(i+tmp);
  			left=s.charAt(i-tmp);
  			if (left == right){
  				let tmpString=s.slice(i-tmp,i+tmp+1);
				if (tmpString.length > result.length){
					result=tmpString;
				}
  				tmp++;
  			}else{
  				break;
  			}
  		}
  	}
  	return result;
};
longestPalindrome("sgyyvvya");

/**
*	
*/
