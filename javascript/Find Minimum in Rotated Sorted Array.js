/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    let min = Number.MAX_VALUE;
    for(var i=0; i<nums.length; i++){
        if(nums[i] < min){
           min = nums[i]
        }
    }
    return min;
};