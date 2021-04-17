/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanEqualant ={
        'I':1,
        'IV':4,
        'V':5,
        'IX':9,
        'X':10,
        'XL':40,
        'L':50,
        'XC':90,
        'C':100,        
        'CD':400,
        'D':500,
        'CM':900,
        'M':1000
    }
    let result=0;
    let stringLength = s.length;
    while(stringLength > 0){
        // 2 digit string
        let subString = s.substring(0,2);
        if(romanEqualant[subString]){
           result = result+romanEqualant[subString];
            stringLength = stringLength-2;
            s= s.slice(2);
        } else {
        //  Single digit string
            subString = s.substring(0,1);
            result = result+romanEqualant[subString];
            stringLength = stringLength-1;
            s= s.slice(1);
        }
    }
    return result;    
};
