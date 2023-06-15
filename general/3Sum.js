/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    const results = [];
    for(let i = 0; i < nums.length; i++) {
        
        //  check if prev and current num is same
        //  if it is then leave this iteration, as it will yield same result
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        
        // our target sum   
        const target = 0 - nums[i];
        
        //  min range
        let left = i + 1;
        //  Max range 
        let right = nums.length - 1;
        while(right > left) {
            const sum = nums[left] + nums[right];
            if(sum > target) { 
                right--;
            } else if (sum < target) {
                left++;
            } else {
                results.push([nums[i], nums[left], nums[right]]);
                // to avoid duplicate 
                while(nums[left] === nums[left + 1]) left++;
                while(nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            }
        }
    }
    return results;
};