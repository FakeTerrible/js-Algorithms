// 383. 赎金信

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    var map = new Map();
    for (let i of magazine) {
        if (map.has(i)) {
            map.set(i, map.get(i) + 1);
        } else {
            map.set(i, 1);
        }
    }
    for (let j of ransomNote) {
        if (map.has(j)) {
            if (map.get(j) != 0) {
                map.set(j, map.get(j) - 1);
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
};

export {canConstruct };