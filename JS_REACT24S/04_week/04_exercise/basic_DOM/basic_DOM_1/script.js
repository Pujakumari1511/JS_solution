/* 
Write JavaScript code that selects content id by using getElementById.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.
*/

const changeText = document.getElementById("content");
const button = document.getElementsByTagName("button");

function myFunction(){
    console.log("It's work")
    changeText.textContent = "Hello world";
    button[0].textContent = "clicked"
}

//button.addEventListener("click", myFunction)