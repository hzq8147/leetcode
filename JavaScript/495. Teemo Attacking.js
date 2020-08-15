/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let result = 0;
    let statusTime = 0;
    if (timeSeries.length === 0) return 0;
    if (timeSeries.length === 1) return duration;
    for (let i = 1 ; i < timeSeries.length ;i++){
        if (timeSeries[i] - timeSeries[i-1] >= duration){
            result = result + duration;
        }else{
            result = result + timeSeries[i] - timeSeries [i - 1];
        }
    }
    result = result + duration;
    return result;
};
findPoisonedDuration(  [1,4], 2);