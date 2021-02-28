module.exports = function toReadable (number) {
    var uptonineteen = ['','one','two','three','four', 'five', 'six', 'seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    var tenner = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    var hundreds = ['hundred', 'thousand', 'million']
    var string = '';
    if (number == 0) {
        return 'zero';
    }
    if (number >= 0 && number <= 19) {
        return uptonineteen[number];
    } else {
        number = String(number).split('').map(Number);
        
        while (number.length > 0) {
            if (number.length == 2) {
                if (number[0] < 2) {
                    string += ' ' + uptonineteen[Number(number[0]+ '' + number[1])];
                    return string.trim();
                } else {
                    string += ' ' + tenner[number[0]-2] + ' ' + uptonineteen[number[1]];
                    return string.trim();
                }
            } else { 
                string += uptonineteen[number[0]] + ' ' + hundreds[number.length -3];
                number.shift();
            }
        }
             
        
    }
  
}
