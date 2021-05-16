var output = 'x   ';
const spaceNum = (value) => {
    var spaceNum = ' ';
    var space = 4 - value;
    while(space-- >  0 )
    spaceNum += ' ';
    return spaceNum; 
}

for (let x = 0; x < 13; x++) {
    for (let y = 0; y < 13; y++) {
        if(x == 0 && y > 0){
            output += `[${y}]` + spaceNum((y + '   ').length + 2);
        }
        else if(y == 0 && x > 0){
            output +=`[${x}]`;
        }
        else if(x > 0 &&  y > 0){
            output += spaceNum((x * y + ' ').length) + x * y; 
        }
    } 
    output += '\n' 
}
console.log(output);