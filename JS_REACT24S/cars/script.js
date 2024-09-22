/* Create a Car Class:
- Define a Car class with properties for the car's license plate, maker, model, current owner, price, and color.
User Input for Car Details:
- Set up an HTML form for users to input the car's license plate, maker, model, current owner, price, and color.
- Use JavaScript to collect the values entered by the user when the form is submitted.
Create and Store Car Objects:
- Upon form submission, instantiate a new Car object using the collected input values.
- Add this new Car object to an array that stores all the cars entered by the user.
Display Car Information:
- Use JavaScript to dynamically generate a table on the webpage, displaying the information of each car in the array.
- Ensure the table updates to include each new car when it is added.
Search for a Car by License Plate:
- Implement a function that allows the user to search for a car using its license plate.
- Include error handling to manage cases where the search input is invalid or the license plate cannot be found.
Show Search Results:
- If the search successfully finds a car, display the car's make, model, and owner on the screen.
- If no matching car is found, display a message indicating that no results were found.*/



'use strict';

class Car {
    constructor(licensePlate, maker, model, currentOwner, price, color){
        this.licensePlate = licensePlate;
        this.maker = maker;
        this.model = model;
        this.currentOwner = currentOwner;
        this.price = price;
        this.color = color;
    }
}

let carsArry = [];

function userInput(e){
    e.preventDefault();

    let licensePlate = document.getElementById("licensePlate")
    let maker = document.getElementById("maker")
    let model = document.getElementById("model")
    let currentOwner = document.getElementById("currentOwner")
    let price = document.getElementById("price")
    let color = document.getElementById("color")
    

    let car1 = new Car(licensePlate.value,
    maker.value,
    model.value,
    currentOwner.value,
    price.value,
    color.value
    );
    carsArry.push(car1);
}

const displayTable = () => {
    const table = document.querySelector("#carDatabase");

    table.innerHTML = table.rows[0].innerHTML;

    carsArry.forEach(car => {
        const row = table.insertRow(-1);
        Object.values(car).forEach(text => {
            const cell = row.insertCell(-1);
            cell.textContent = text;
        })
    })
}

const form = document.getElementById("createForm")

form.addEventListener("submit", userInput)



console.log(carsArry);



