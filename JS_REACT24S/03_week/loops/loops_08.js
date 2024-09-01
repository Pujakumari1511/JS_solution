// Develop a program that initially asks the user how many numbers they wish to input. After receiving this information, the program should then prompt the user to enter each of these numbers. Once all numbers have been entered, the program should determine and display the smallest and biggest number provided by the user.

const prompt = require('prompt-sync')();

function myFunction(){
    let count = 0;

    let biggestNo = -Infinity;
    let smallestNo = Infinity;

    let userInput = +prompt("How many number you want to enter?");
    
    while (count < userInput){
        let input = +prompt("Type a number: ")
        count++;

        if (input > biggestNo){
            biggestNo = input;
        }

        if (input < smallestNo){
            smallestNo = input;
        }
    }

    console.log(`Biggest number is:  ${biggestNo}` + '\n' + `Smallest number is:  ${smallestNo}`)
}

myFunction();
