// 350. 两个数组的交集 II

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let map = new Map(), res = [];
    for (let i of nums1) {
        if (map.has(i)) {
            map.set(i, map.get(i) + 1);
        } else {
            map.set(i, 1);
        }
    }
    for (let j of nums2) {
        if (map.has(j)) {
            if (map.get(j) > 0) {
                res.push(j);
                map.set(j, map.get(j) - 1);
            }
        }
    }
    return res;
};

export {intersect};