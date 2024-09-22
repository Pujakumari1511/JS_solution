
const select = document.querySelector("#type")

const checkBoxes = document.querySelectorAll('input[type="checkbox"]')
const delivery = document.getElementById("delivery")
const input = document.getElementById("fullname")
const button = document.getElementById("seeOrder")
const deliveryMethod = document.querySelectorAll('input [name="que"]:checked').value;



function updatePrice(price) {
    const totalPrice = document.querySelectorAll("#totalPrice")
    totalPrice[0].textContent = "$" + price
    totalPrice[1].textContent = "$" + price
}


let checkbox;
function pancakeType(){
    let sum = Number(select.value)
    
    for (checkbox of checkBoxes){
        if (checkbox.checked){
            //console.log(checkbox.id)
            sum += Number(checkbox.value)
        }
    }
    if (delivery.checked){
        sum += Number(delivery.value)
    }
    updatePrice(sum) 

} 




function currentOrderDetails(){
    
    const orderDetails = document.getElementById("customer");
    const nutsDom = document.getElementById("nuts");
    const bananaDom = document.getElementById("bananas");
    const syrupDom = document.getElementById("syrup");
    const whippedCreamDom = document.getElementById("whippedCream");
    const icecreamDom = document.getElementById("icecream");
    


    const nut = nutsDom.input;
    let nutValue = ""
        if (nutsDom.checked){
            nutValue = nutsDom.textContent;
        }

    const nuts = nutsDom.labels[0].innerText + ",";
    const banana = bananaDom.labels[0].innerText + ",";
    const syrup =  syrupDom.labels[0].innerText + ",";


    const deliveryType = document.getElementsByName("que");
    let deliveryTypeChoosen = "";
    for (let i = 0; i < deliveryType.length; i++){
        if (deliveryType[i].checked){
            deliveryTypeChoosen = deliveryType[i].labels[0].textContent;
        }
    }



    let paraText = "<p>Name: " + input.value + "</p>" +
    "<p>Pancake type: " + select.selectedOptions[0].innerText +  "</p>" +
    "<p>Toppings:" + nutValue + "</p>" +
    "<p>Extras: Whipperd Cream, Icecream </p>" +
    "<p>Delivery method: " + deliveryTypeChoosen + "</p>" +
     "<h4>Total price: $15 </h4>"

    
    orderDetails.innerHTML = paraText;             
}


select.addEventListener("change", pancakeType)

for (let checkbox of checkBoxes){
    checkbox.addEventListener("change", pancakeType)
}

delivery.addEventListener("change", pancakeType)

button.addEventListener("click", currentOrderDetails)
