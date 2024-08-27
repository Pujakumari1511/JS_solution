/* Write a function named secretWordGame that takes a word as a parameter and returns a special message based on the following conditions:

If the word is "JavaScript", return "You found the secret word!".
If the word starts with the letter "J", return "You're close, but not quite!".
If the word ends with the letter "t", return "Almost there!".
If the word contains the letter "e" anywhere, return "Good guess, but not the secret word!".
For any other word, return "Keep trying!".
*/


function secretWordGame(word){
    let message =  "Keep trying";

    if (word == "JavaScript"){
        return "You found the secret word!";

    } 
    if (word.substring(0,1) === "J"){
        message = "You're close, but not quite!";

    } 
    if (word.substring(word.length - 1) === "t"){
        message =  "Almost there!";

    }
    if (word.includes('e')){
        message =  "Good guess, but not the secret word!";
            
    }
    return message;

}


// Sample usage - do not modify
console.log(secretWordGame("JavaScript"));  // Outputs: "You found the secret word!"
console.log(secretWordGame("Java"));        // Outputs: "You're close, but not quite!"
console.log(secretWordGame("Cat"));         // Outputs: "Almost there!"
console.log(secretWordGame("Elephant"));    // Outputs: "Good guess, but not the secret word!"
console.log(secretWordGame("Dog"));         // Outputs: "Keep trying!"




 /*    switch (word){
        case "JavaScript":
            return "You found the secret word!";
            break;
        case "J":
            if (word )
            return "You are close, but not quite!";
            break;
        case "t":
            return "Almost there!";
            break;
        case "e":
            return "Good guess, but not the secret word!"
            break;
        default:
            return "Keep trying!";
    } */