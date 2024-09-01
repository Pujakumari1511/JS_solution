// Develop a program that requests the user to input 20 numbers. After all numbers are entered, the program should display how many of these numbers are even. Do not use array.

const prompt = require('prompt-sync')();

function evenNumbers(){
    let numb = 0;
    let result = 0;

    while (nums < 20){
        let userInput = +prompt("Type a number: ")
            if (userInput % 2 == 0){
                result++;
                //result += `${userInput} `
            }
            nums++
        }
    console.log(result);
 }
    


evenNumbers();