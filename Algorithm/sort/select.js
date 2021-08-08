/**
 * 
 * @param {[Number]} nums 
 * @returns {[Number]}
 */

var select = function(nums){
    const n = nums.length;
    for(let i = 0; i < n - 1; i++){
        let cur = i;
        for(let j = i+1; j < n; j++){
            if(nums[cur] > nums[j]){
                cur = j;
            }
        }
        let temp = nums[i];
        nums[i] = nums[cur];
        nums[cur] = temp;
    }
    return nums;
}

export {select};