'use strict';

const CARS_KEY = 'cars';
const carsArry = JSON.parse(localStorage.getItem(CARS_KEY)) || [] ;
const addCarForm = document.getElementById("addcarform");
//localStorage.setItem("user", JSON.stringify(carsArry || []))

class Car {
    constructor(licensePlate, maker, model, currentOwner, price, color, year){
        this.licensePlate = licensePlate;
        this.maker = maker;
        this.model = model;
        this.currentOwner = currentOwner;
        this.price = price;
        this.color = color;
        this.year = year;
        this.discountedPrice = this.calculateDiscount();
    }

    calculateDiscount(){
         
        let carDiscountedPrice;
        let currentYear = new Date().getFullYear();
        let carsAge = currentYear - this.year;
        
        if (carsAge > 10){
            carDiscountedPrice = price.value.trim() * 0.85;  
        } else {
            carDiscountedPrice = "N/A"
        } 
        return carDiscountedPrice;
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

    try {
        const licensePlate = document.getElementById("licensePlate")
        const maker = document.getElementById("maker")
        const model = document.getElementById("model")
        const currentOwner = document.getElementById("currentOwner")
        const price = document.getElementById("price")
        const color = document.getElementById("color")
        const year = document.getElementById("year")
        

        if (carsArry.find(car => car.licensePlate == licensePlate.value)){
            throw new Error(`The license plate ${licensePlate.value} already exist in the records`);
        }  
        
        let newCar = new Car(licensePlate.value,
        maker.value.trim(),
        model.value.trim(),
        currentOwner.value.trim(),
        price.value.trim(),
        color.value,
        year.value);

        addCarForm.reset();
        carsArry.push(newCar);
        localStorage.setItem(CARS_KEY, JSON.stringify(carsArry));
        displayTable();     
        displayMessage("Car added successfully!!");
        
    } catch (error) {
        displayMessage(error.message, "error")
    }        
};


const displayTable = () => {
    const table = document.querySelector("#carDatabase");
    table.innerHTML = table.rows[0].innerHTML;

    carsArry.forEach((car, index) => {
        const row = table.insertRow(-1);
        console.log(`index ${index}`);
        Object.keys(car).forEach(key => {
            const cell = row.insertCell(-1);
            if (key == "color"){
                const colorBox = document.createElement("div");
                colorBox.classList.add("color-box")
                colorBox.style.background = car[key];
                cell.appendChild(colorBox)
            } else {
                cell.textContent = key == "price" || (key == "discountedPrice" && car[key] != "N/A")
                ? "€" + Number(car[key]).toFixed(2) 
                : car[key];
            }
        
            

        });

        const deleteButton = document.createElement("span");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", () => deleteCar(index));
        row.insertCell(-1).appendChild(deleteButton);
    })
}

const deleteCar = (index) => {
    carsArry.splice(index, 1);
    localStorage.setItem(CARS_KEY, JSON.stringify(carsArry));
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
    searchCarNumber.reset();
    for (let car of carsArry){
        if (car.licensePlate == licenseNumber){
            searchResultText = "<p> License number: " + licenseNumber + "</p>" +
            "<p> Maker: " + car.maker + "</p>" +
            "<p> Model: " + car.model + "</p>" +
            "<p> Owner: " + car.currentOwner + "</p>" +
            "<p> Original price: "+ "€" + car.price + "</p>" + 
            "<p> Discounted price: " + "€"+ car.discountedPrice + "</p>"
        }   
    } 

    const resultNotFoundText = `No car found with the license plate ${licenseNumber}.`
    
    const searchResult = document.getElementById("search-result");
    searchResult.innerHTML = searchResultText ? searchResultText : resultNotFoundText;

}

const searchCarNumber = document.getElementById("searchCarNumber");

searchCarNumber.addEventListener("submit", searchLicensehNumber);


