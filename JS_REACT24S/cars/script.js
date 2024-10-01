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


const carsArry = []; // inistialing empty array
localStorage.setItem("user", JSON.stringify(carsArry || []))

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

function userInput(e){
    e.preventDefault();
    const licensePlate = document.getElementById("licensePlate")
    const maker = document.getElementById("maker")
    const model = document.getElementById("model")
    const currentOwner = document.getElementById("currentOwner")
    const price = document.getElementById("price")
    const color = document.getElementById("color")
    const year = document.getElementById("year")
    

    let discountPrice;
    let carDiscountedPrice;
    let dates = new Date();
    let years = dates.getFullYear();
    let carsAge = years - year.value;
    

    if (carsAge > 10){
        discountValue = (price.value * 15)/ 100; 
        carDiscountedPrice = price.value - discountPrice;   
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

    
    carsArry.push(car1);
    displayTable();           
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
const form = document.getElementById("form")
form.addEventListener("submit", userInput)

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
            "<p> Car maker: " + car.maker + "</p>" +
            "<p> Car model: " + car.model + "</p>" +
            "<p> Current owner: " + car.currentOwner + "</p>" +
            "<p> Car price: " + car.price + "</p>" + 
            "<p> Discounted price: " + car.discountedPrice + "</p>"
        }   
    } 

    const resultNotFoundText = "There is no car with license number " + licenseNumber + " added to the system. Try again?"
    
    const searchResult = document.getElementById("search-result");
    searchResult.innerHTML = searchResultText ? searchResultText : resultNotFoundText;

}

const searchCarNumber = document.getElementById("searchCarNumber");

searchCarNumber.addEventListener("submit", searchLicensehNumber);
