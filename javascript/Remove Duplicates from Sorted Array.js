/**
 * @param {number[]} nums
 * @return {number}\««
 */
var removeDuplicates = function(nums) {
    var j=0;
    var maxNum = 0;
    var uniqueNumEnded = false;
    for(var i=0; i< nums.length; i++){
        if(i==j) continue;
        if(nums[i] !== nums[i+1]) {
             nums[j] = nums[i];
             j++;
         }
         maxNum = maxNum > nums[i] ? maxNum : nums[i];
    }
    return nums;
};
