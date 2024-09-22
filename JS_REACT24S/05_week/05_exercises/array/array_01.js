// Initial array of team members
let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];

// Exercise 1: Loop through `teamMembers` and log each name to the console.
// Write your code here:
teamMembers.forEach((element) => console.log("Each name of the Array: " + element));


// Exercise 2: Remove the first member of the array.
// Write your code here:
    teamMembers.shift();
    console.log("Removeing the first member of the array: " + teamMembers);

// Exercise 3: Remove the last member of the array.
// Write your code here:
    teamMembers.pop();
    console.log("Removeing the last member of the array: " + teamMembers);

// Exercise 4: Add a new member "Alex" to the front of the array.
// Write your code here:
    teamMembers.unshift("Alex");
    console.log("Adding a new member Alex: " + teamMembers);

// Exercise 5: Append a new member "Linda" to the end of the array.
// Write your code here:
    teamMembers.push("Linda");
    console.log("Appending a new member Linda" + teamMembers);

// Exercise 6: Create a new array that excludes the first two members.
// Write your code here:

    let newArr = [];
    
    newArr = teamMembers.slice(0, 2);
    console.log("Assigning newArray: " + newArr);

// Exercise 7: Find the index of "Mike" in the array.
// Write your code here:
   console.log("Finding the index of: " + teamMembers.indexOf("Mike"));
    

// Exercise 8: Try to find the index of "Jake" (who is not in the array).
// Write your code here:
    console.log("Trying to find the index of Jake: " + teamMembers.indexOf("Jake"));

// Exercise 9: Use `splice` to remove "Mike" and add "Carol" and "Bruce" in his place.
// Write your code here:

    teamMembers.splice(2,1, "Carol", "Bruce");
    console.log(teamMembers)

// Exercise 10: Concatenate a new member "Bob" to the end of the array and create a new array.
// Write your code here:
    teamMembers.push("Bob");

// Exercise 11: Using `slice` to Copy the Entire Array
// Write your code here:
    console.log("Copy the entire array: " + teamMembers.slice(0, teamMembers.indexOf()))

// Exercise 12: Combining Arrays with `concat`
// Assume `newMembers` array is defined
let newMembers = ['Tina', 'Dean'];
// Write your code here:
    let concatingArr = teamMembers.concat(newMembers);
    console.log("Concating Arrays: " + concatingArr)

// Exercise 13: Finding all occurrences of a Emily
// Write your code here:
    let count = 0;
    teamMembers.forEach((ele)=> {
        if (ele == "Emily"){
            count++;
        }
    })
    console.log("Emily: " + count);

// Exercise 14: Transforming members with `map` to be all written uppercase
// Write your code here:

    let transforUpperCase = concatingArr.map((e)=> e.toUpperCase())
    
    console.log("Transforming uppercase" + transforUpperCase);