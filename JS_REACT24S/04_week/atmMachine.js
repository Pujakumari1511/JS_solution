/* # Basic ATM Simulator

Create a simple ATM program that allows a user to check their balance, deposit money, or withdraw money. Use functions, loops, and conditionals to perform these tasks and interact with the user.


## Requirements
1) Create a function called `checkBalance` to show the current balance to the user.

2) Write a function called `deposit` that takes an amount of money to add to the balance. If the amount is positive, add it to the balance.

3) Write a function called `withdraw` that takes an amount of money to subtract from the balance. It should only allow the withdrawal if the amount is positive and does not exceed the current balance.

4) Create a `main` function to repeatedly ask the user what they want to do (check balance, deposit, withdraw, or exit) until they choose to exit.

5) Use `prompt` to get user input and `alert` to show messages. */


const prompt = require('prompt-sync')();

"use strict";


function checkBalance(balance){
    console.log(`Your current balance is: ${balance}`);
}

function deposit(balance){
    let depositAmount = +prompt("How much amount do you want to deposit?");
    if (depositAmount > 0){
        balance += depositAmount;
        console.log(`After deposit, your total account balance is: ${balance}`);
    }   else {
        console.log("Deposit amount cannot be negative");
    }
    return balance;
}


function withdraw(balance){
    let withdrawAmount = +prompt("How much amount do you want to withdraw?");
    if (balance < withdrawAmount){
        console.log("You have insufficient balance");
        return balance;
    }
    if (withdrawAmount < 0){
        console.log("Withdraw amount cannot be negative");
        return balance;
    }
    balance -= withdrawAmount;
    console.log("After withdraw your current balance is:" + balance);
    return balance;
}

function main(){
    let balance = 10000;
    let x = true;
    while (x){
        let userInput = +prompt("what do you want to do (1- check balance, 2- deposit, 3- withdraw, or 4- exit): ")
        switch (userInput){
            case 1:
                checkBalance(balance);
                break;
            case 2:
                balance = deposit(balance)
                break;
            case 3:
                balance = withdraw(balance)
                break;
            default:
                console.log("Exit");
                x = false;
        }
    } 
 /*   checkBalance(balance);
   //checkBalance(400);
   balance = deposit(balance);
   checkBalance(balance);
   balance = withdraw(balance);
   console.log(balance);
   //checkBalance(balance); */

   
    
}

main();