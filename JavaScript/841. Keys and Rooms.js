/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const roomDict = {};
    const open = ( idx) =>{
        roomDict[idx] = true;
        for (let i = 0 ;i < rooms[idx].length ;i ++){
            if (!roomDict[rooms[idx][i]]){
                open(rooms[idx][i]);
            }
        }
    }
    open(0);
    let result = 0;
    Object.keys(roomDict).forEach(key=>{
        if(roomDict[key]){
            result ++;
        }
    })
    if (result == rooms.length){
        return true;
    }
    return false;
};

/**
 * 有向图的遍历 一次过就这？？
 **/