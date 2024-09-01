/* Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number. */


const prompt = require('prompt-sync')();
/* 
function averageNumber(){
    let count = 0;
    let result = 0;
    let sum = 0;
    let biggestNo = 0;
    let smallestNo = 0;

    while (count < 5){
        let userInput = +prompt("Type a number: ")
        
        sum += userInput;
        count++;
        if (biggestNo > userInput){
            biggestNo = userInput;
        }   else    {
            biggestNo = userInput;
        }
         
        
        
    }    
    result = sum / count;
    console.log(result);
    console.log("Biggest number: " + biggestNo);
    console.log("Smallest number: " + lowestNo);
}

averageNumber();

 */
function myFunction(){
    let sum = 0;
    let smallest = Infinity;
    let biggest = -Infinity;
    let count = 10;

    for (let counter = 0; counter < count; counter++){
        let input = +prompt("Type a number: ");
        sum += input;

        if (input < smallest){
            smallest = input;
        }
        if (input > biggest){
            biggest = input
        }
    }
    let average = sum / count;

    console.log(`The answer of all the enterd numbers is ${average} and the sum is ${sum}. ` + `The smallest number you entered is ${smallest}and largest number is ${biggest}`)
}

myFunction();