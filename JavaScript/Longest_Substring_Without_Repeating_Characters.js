/**
 * 3. 无重复字符的最长子串
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var contain={};
    var result=0;
    var tmp=0;
    var start=0;
        for (i=0;i<s.length;i++){
                if (contain[s[i]]>=0 && contain[s[i]]!=i){
                    //存在过
                    start=contain[s[i]]+1 > start ? contain[s[i]]+1:start;
                }
                tmp=i-start+1;
                contain[s[i]]=i;   
                if (tmp>=result){
                        result=tmp;
                }
            }
    return result;
};
/**
*   滑动窗口
*   start end
*/