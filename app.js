
// FUNCTIONS EXERCISE

// 1. Write a function that reverses a string


// 2. Write a function that sorts a string in alphabetical order


// 3. Write a function that loops over an array or Strings and capitalises each one before returning the array 


// 4. Write a function that console logs the data type of the aruments


// 5. Write a function that returns the length of the longest word in a sentence

function helloWorld() {
    console.log('Hello world');
}

helloWorld();

function returnHello() {
    return 'Hello world';
}

var greeting = returnHello();

console.log(greeting);

/*ex 5.2*/
function myName() {
    var name = prompt("Give me your name");
    return name;
}

console.log(myName());


function sum(number1, number2) {
    return number1 + number2;
}

var sumAnswer1 = sum(2, 4);
console.log(sumAnswer1);

var sumAnswer2 = sum(12, 3);
console.log(sumAnswer2);

var sumAnswer3 = sum(sumAnswer1, sumAnswer2);
console.log(sumAnswer3);


function sum(number1, number2) {
    var num1 = prompt("Give me a number");
    var num2 = prompt("Give me a number");
    var answer = num1 + num2;
    console.log("the value of the numbers added together is " + answer);
}

/*ex 5.3*/
function movieDetails(title, released) {
    return (`The movie is ${title} and released on ${released}`);
}

var movie1 = movieDetails("Titanic" , "2003");

console.log(movie1);

/*ex 5.4*/
function shoppingCart(item, cost, balance) {
    if (cost <= balance) {
        return (`Congrats you can have ${item}`);
    } else {
        return (`Nope you cant have ${item}`);
    }
}

/*not visible
var freePerson = 'Lucy';

function outerFence() {
    var prisoner1 = 'Tim';
    console.log(freePerson);
}

console.log(prisoner1);

*/


