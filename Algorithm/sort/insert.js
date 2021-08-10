/**
 * 
 * @param [Number] nums 
 * @returns [Number]
 */

var insert = function (nums) {
    const n = nums.length;
    for (let i = 1; i < n; i++) {
        let pre = i - 1;
        let cur = nums[i];
        while (pre >= 0 && nums[pre] > cur) {
            nums[pre + 1] = nums[pre];
            pre--;
        }
        nums[pre + 1] = cur;
    }
    return nums;
}

export {insert};