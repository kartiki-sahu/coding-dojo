/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const mergedArray = mergeSort(nums1, nums2);
    const length = mergedArray.length;
    const mid = Math.floor(length/2);
    if (length % 2) {
        return mergedArray[mid];
    } else {
        return (mergedArray[mid-1] + mergedArray[mid])/2;
    }
};

var mergeSort = function(arr1, arr2){
    let i=0; 
    let j=0;
    let result = [];
    while (i<arr1.length && j<arr2.length) {
        if(arr1[i] < arr2[j]) {
           result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    
    return result;
}