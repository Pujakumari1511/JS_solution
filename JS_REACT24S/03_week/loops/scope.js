let localVar = "I Am Local Variable"; //

function myFunction1(){
    
    localVar = "I am var 1";
    console.log(localVar);
}

function myFunction2(){
    localVar = "I am var 2";
    console.log(localVar);
}

myFunction2();
console.log(localVar);

myFunction1();
console.log(localVar);

myFunction2();
console.log(localVar);