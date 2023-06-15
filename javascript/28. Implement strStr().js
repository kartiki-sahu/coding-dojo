var strStr = function(haystack, needle) {
    if (needle.length && haystack.length > needle.length) {
        let index = -1;
        for(var i=0; i<haystack.length; i++){
            for(var j=0; j<needle.length; j++){
                if(needle[j] === haystack[i] && index < 0){
                     index = i;
                 } else break;
            }
        }
        return index;
    } else {
        return 0;
    }
};
