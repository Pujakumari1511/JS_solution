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

const CARS_KEY = 'cars';
const carsArry = JSON.parse(localStorage.getItem(CARS_KEY)) || [] ;
const addCarForm = document.getElementById("addcarform");
//localStorage.setItem("user", JSON.stringify(carsArry || []))

class Car {
    constructor(licensePlate, maker, model, currentOwner, price, color, year, discountedPrice){
        this.licensePlate = licensePlate;
        this.maker = maker;
        this.model = model;
        this.currentOwner = currentOwner;
        this.price = price;
        this.color = color;
        this.year = year;
        this.discountedPrice = discountedPrice;
    }
}

const selectYear = document.getElementById("year");
for (let year = new Date().getFullYear(); year >= 1886; year--) {
    selectYear.options.add(new Option(year, year))
}

const displayMessage = (message, type = "success") => {
    const messageElement = document.querySelector("#message");
    messageElement.textContent = message;
    messageElement.className = type;
    setTimeout(() => {
        messageElement.textContent = "";
        messageElement.className = "";
    }, 3000);
}

function userInput(e){
    e.preventDefault();

    const licensePlate = document.getElementById("licensePlate")
    const maker = document.getElementById("maker")
    const model = document.getElementById("model")
    const currentOwner = document.getElementById("currentOwner")
    const price = document.getElementById("price")
    const color = document.getElementById("color")
    const year = document.getElementById("year")
    
    let carDiscountedPrice;
    let years = new Date().getFullYear();
    let carsAge = years - year.value;
    

    if (carsAge > 10){
        carDiscountedPrice = price.value * 0.85;  
    } else {
        carDiscountedPrice = "N/A"
    }    
    
    let car1 = new Car(licensePlate.value,
    maker.value,
    model.value,
    currentOwner.value,
    price.value,
    color.value,
    year.value,
    carDiscountedPrice
    );

    addCarForm.reset();
    carsArry.push(car1);
    localStorage.setItem(CARS_KEY, JSON.stringify(carsArry));
    displayTable();     
    displayMessage("Car added successfully!!");
         
};


const displayTable = () => {
    const table = document.querySelector("#carDatabase");

    table.innerHTML = table.rows[0].innerHTML;

    carsArry.forEach((car, index) => {
        const row = table.insertRow(-1);

        Object.values(car).forEach(text => {
            const cell = row.insertCell(-1);
            cell.textContent = text;
        })

        const deleteButton = document.createElement("button2");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", () => deleteCar(index));
        row.insertCell(-1).appendChild(deleteButton);
    })
}

const deleteCar = (index) => {
    carsArry.splice(index, 1);
    localStorage.setItem("cars", JSON.stringify(carsArry));
    displayTable();
    displayMessage("Car deleted successfully!!")
}

addCarForm.addEventListener("submit", userInput)

displayTable();

console.log(carsArry);

// Search license number
const searchButton = document.getElementById("search-button")

function searchLicensehNumber(e){
    e.preventDefault();
    let searchResultText;
    const licenseNumber = document.getElementById("licenseNumber").value;
    for (let car of carsArry){
        if (car.licensePlate == licenseNumber){
            searchResultText = "<p> License number: " + licenseNumber + "</p>" +
            "<p> Maker: " + car.maker + "</p>" +
            "<p> Model: " + car.model + "</p>" +
            "<p> Owner: " + car.currentOwner + "</p>" +
            "<p> Original price: " + car.price + "</p>" + 
            "<p> Discounted price: " + car.discountedPrice + "</p>"
        }   
    } 

    const resultNotFoundText = "No car found with the given license plate."
    
    const searchResult = document.getElementById("search-result");
    searchResult.innerHTML = searchResultText ? searchResultText : resultNotFoundText;

}

const searchCarNumber = document.getElementById("searchCarNumber");

searchCarNumber.addEventListener("submit", searchLicensehNumber);
