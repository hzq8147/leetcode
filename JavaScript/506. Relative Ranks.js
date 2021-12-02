/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const map = {};
    let max = -1;
    const result = [];
    score.forEach((s,i)=>{
        map[s] = i;
        if (s > max) max = s;
    })
    let t = 1;
    for (let i = max ;i >= 0;i --){
        if (map[i]>=0){
            switch(t){
                case 1:
                    result[map[i]] = 'Gold Medal';
                    break;
                case 2:
                    result[map[i]] = 'Silver Medal';
                    break;
                case 3:
                    result[map[i]] = 'Bronze Medal';
                    break;
                default:
                    result[map[i]]= t+'';
                    break;
            }
            t++;
        }
    }
    return result;
};
console.log(findRelativeRanks([10, 3, 8, 9, 4]));