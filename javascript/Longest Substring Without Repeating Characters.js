var lengthOfLongestSubstring = function(s) {
    let i=0
    let j=0;
    let maxLength = s.length ? 1 : 0; 
    let visited = {};
    let stringLength = 0;
    
    while(j<s.length){
        if(visited[s[j]]){                    
            maxLength = Math.max(stringLength, maxLength);
            i++;
            j=i+1;
            stringLength = 1;
            visited = {};
            visited[s[i]] = true;
        } else {
            visited[s[j]] = true;
            stringLength ++;
            j++;
        }
    }
    maxLength = Math.max(stringLength, maxLength);
    return maxLength;
};

