// Develop a program that initially asks the user for a single number. Following this, the program should inquire if the user wishes to continue providing numbers with the prompt: 'Do you want to continue giving numbers? (y/n)'. If the user responds with 'y', the program will request another number. If the response is 'n', the program terminates. Upon termination, it calculates and displays the average of all entered numbers.

const prompt = require('prompt-sync')();

function averageNumber(){
    let count= 1;
    let sum = 0;
    let result = 0;
    while (count > 0){
        let userInput = +prompt("Enter a singal number: ");
        sum += userInput;
        let shouldContinue = prompt("Do you want to continue giving numbers? (y/n)");

        if (shouldContinue === "n"){
            break;
            
        }   else if (shouldContinue === "y"){
            count++;
        }
                    
    }
    result = sum / count;
    console.log(result);
}

averageNumber();
