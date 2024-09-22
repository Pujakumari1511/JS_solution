/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`. 
Add at least two book objects to this collection.
*/

// Your code here
const library = [];
class Book{
    constructor(title, author, yearPublished, genres){
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
        this.genres = genres;
    }
}

const book1 = new Book("Best book", "Puja Kumari", 2011)
const book2 = new Book("My Book", "Akash Kumar", 2022)
console.log(book1);

library.push(book1, book2);
console.log(library)

/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

// Your code here
console.log(library[0].title)
library[1].yearPublished = 2023;
console.log(library)

/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

// Your code here
library[0].genres = ["Thriller", "Romance", "Suspence"];
library[0]["isAvailable"] = true;

console.log(library[0]);


/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

// Your code here
console.log("\n-----------------\n")
const book3 = new Book("New Book", "Neisha", 2010, ["Thriller"]);
library.push(book3)

library[2].genres.push("Romantic");
console.log(library);

/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

// Your code here
function createBook(title, author, yearPublished, genres = []){
    const book = {
        title: title,
        author: author,
        yearPublished: yearPublished,
        genres: genres,
    };
    return book;
}

const newBook = new createBook("Good book", "Arshika", 1993, ["comedy", "romance"]);
console.log(newBook);

/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/

const jsonString = JSON.stringify(library);
console.log(jsonString);

const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
