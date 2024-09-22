const myId = document.getElementById("myId")
const mySecondId = document.querySelector("#myId")

const myClass = document.getElementsByClassName("myClass")
const mySecondClass = document.querySelectorAll(".myClass")
const myClassSecond = document.querySelector(".myClass")

const myParagraph = document.getElementsByTagName("p")

const button = document.querySelector("#whatever");

const headLine = document.querySelector("h1")

const list = document.querySelector("ul");

//let newElement = document.createElement("li");

console.log(headLine.textContent);


function myFunction(){
    console.log("This was triggered in html!!!");
    headLine.textContent = "What i just did!!1"
    button.textContent = "fixed it"
    
    
}

function myFunction2(){
    console.log("wow, its works here also!!");
    headLine.textContent = "I fixed it"
    button.textContent = "fix it"
    button.style.color = "red"
    headLine.style.fontSize = "50px"
    headLine.style.backgroundColor = "yellow"
    //headLine.remove()
    let newElement = document.createElement("li");
    newElement.textContent = "Puja"
    list.appendChild(newElement)
    
}

document.querySelector("#whatever").addEventListener("click", myFunction2)
//button.addEventListener("click", myFunction2)






