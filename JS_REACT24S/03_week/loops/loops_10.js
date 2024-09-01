// Make a programm which will take in a string as an argument and will reverse it.

function reverseStr(name){
    let reverseStr = "";
    for (let char of name){
        reverseStr = char + reverseStr;
    }
    console.log(reverseStr);
}

reverseStr("puja");