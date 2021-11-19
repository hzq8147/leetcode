/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement1 = function (n) {
    const replace = (m, time) => {
        if (m == 1) {
            return time;
        }
        if (m % 2 == 0) {
            return replace(m / 2, time + 1);
        } else {
            return Math.min(replace(m + 1, time + 1), replace(m - 1, time + 1));
        }
    }
    return replace(n, 0);
};


var map = new Map();

var integerReplacement = function (n) {
    if (n == 1) {
        return 0;
    }
    if (!map.has(n)){
        if (n % 2 == 0) {
            map.set(n,1+integerReplacement(n/2));
        } else {
            map.set(n,Math.min(1+integerReplacement(n+1),1+integerReplacement(n-1)));
        }
    }
    return map.get(n);

};
console.log(integerReplacement(7))
/**
 * 递归/记忆化递归
 *
 */