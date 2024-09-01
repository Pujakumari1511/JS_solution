// Develop a program that continuously prompts the user to input numbers until the user enters 0, at which point the program terminates. After termination, the program should calculate and display the average of all the entered numbers.

const prompt = require('prompt-sync')();

function userAverageNo(){
    let count = 1;
    let sum = 0;
    let result = 0;
    while (count > 0 ){
        let userInput = +prompt("Enter a number: ");
        sum += userInput;
        count++;
        if (userInput == 0){
            break;
        }   
   
    }

    result = sum / count;
    console.log(result);

}

userAverageNo();

