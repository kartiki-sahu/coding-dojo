/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    if (s.length === 0){
        return "Empty String. Please enter some value";
    } else if (s.length === 1){
       return s;
    } else {
        let longPalindrome = s[0];
        var i=0;
        let validMid = true;
        while(i<s.length){
            var start, end;
            if(validMid) {      
                start = i-1;
                end = i+1;         
            } else {               
                start = i;
                end = i+1; 
            }
            
            while(start >= 0 && end <= s.length){
                var substring = s.substring(start, end+1);
                if(s[start] === s[end]){
                    if(longPalindrome.length < substring.length){
                        longPalindrome = substring;
                    }
                } else {
                    break;
                }
                start--;
                end++;
            }
            
            if(!validMid){           
                i++;
            }

            validMid = !validMid;
        }
        return longPalindrome;
    }
};