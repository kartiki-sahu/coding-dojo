/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function (num) {
    const r = [
	       ["", "I","II","III","IV","V","VI","VII","VIII","IX"],
           ["", "X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
           ["", "C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
           ["", "M","MM","MMM"]
	];  
    
    const stringNum = (''+num);
    let i = stringNum.length;
    let m = 0;
    let c = 0;
    let x = 0;
    
    switch(i){
        case 4:
            m = Number.parseInt(stringNum[i-4]);
            c = Number.parseInt(stringNum[i-3]);
            x = Number.parseInt(stringNum[i-2]);
            break;
            
        case 3:
            m = 0;
            c = Number.parseInt(stringNum[i-3]);
            x = Number.parseInt(stringNum[i-2]);
            break;
            
        case 2:
            m = 0;
            c = 0;
            x = Number.parseInt(stringNum[i-2]);
            break;            
    }
    
    i = Number.parseInt(stringNum[i-1]);
    
    return r[3][m] + r[2][c] + r[1][x] + r[0][i];
};
