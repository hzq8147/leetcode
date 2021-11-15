/**
 * @param {number} n
 * @return {number}
 */
/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    
    const res = parseInt(Math.sqrt(n));
    return res;
};
// var bulbSwitch = function(n) {
//     let map = new Array(n).fill(0);
//     for (let i = 1 ;i<= n ;i ++ ){
//         let max = i;
//         let tmp = 1;
//         for (let j = 0 ; j < n; j++){
//             if (tmp < max){
//                 tmp ++;
//             }else {
//                 map[j] = +!map[j];
//                 tmp = 1;
//             }
//         }
//         console.log(map);
//     }
    
//     let res = 0;
//     map.forEach(item=>{
//         if (item == 1){
//             res ++;
//         }
//     })
//     return res;
// };
console.log(bulbSwitch(8));
/**
 * 先模拟试了试发现是
 * 求平方根……
 * 
 * 每个灯按奇数次才能从关变成开的，所以需要求有几个平方数
 * n以内平方数数量  = sqrt(n)
 */