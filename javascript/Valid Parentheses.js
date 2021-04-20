/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let parenthesis = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }
    
    let parenthesisArray = [];
    
    if (s === '') {
      return true; 
    } else if(s.length % 2) {
       return false;
    } else {
        if(s.length === 2) {
            return s.indexOf(parenthesis[s[0]]) > -1;
        } else {
            parenthesisArray.push(s[0])
            for(let i=1; i<s.length; i++){
                if(parenthesis[parenthesisArray[parenthesisArray.length - 1]] === s[i]){
                   parenthesisArray.pop();
                } else {
                    parenthesisArray.push(s[i]);
                }
            }
        }
    }
    
    return parenthesisArray.length === 0;
};