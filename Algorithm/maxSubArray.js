// 53 最大子序和

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let res = nums[0], sum = 0;
    for (let i of nums) {
        if (sum > 0) {
            sum += i;
        } else {
            sum = i;
        }
        res = Math.max(sum, res);
    }
    return res;
};

export {maxSubArray};