if (age >= 18){
    console.log("You are an adult");

}   else {
    console.log("You are a minor");
}

if (score >= 90){
    console.log("Grade: A");
}   else if (score >= 80){
    console.log("Grade B");
}   else {
    console.log("Grade: F");
}


/* if score will be equal to 90 or above 90 than grade will be "A". 
if score will be lower than 90 and equal to 80 than grade will be "B" otherwise grade will be "F". */

let message = age >= 18 ? "Adult" : "Minor";
console.log(message); // Outputs: "Adult"

  