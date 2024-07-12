// chapter 26-30 begin here



// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// var userInput = prompt("Enter a number:");
// var num = parseFloat(userInput);

// console.log("a. Number: " + num);
// console.log("b. Round off value: " + Math.round(num));
// console.log("c. Floor value: " + Math.floor(num));
// console.log("d. Ceil value: " + Math.ceil(num));



// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// var userInput = prompt("Enter a  negative number:");
// var num = parseFloat(userInput);

// console.log("a. Number: " + num);
// console.log("b. Round off value: " + Math.round(num));
// console.log("c. Floor value: " + Math.floor(num));
// console.log("d. Ceil value: " + Math.ceil(num));



// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5




// var num = prompt("Enter a number:");
// num = parseFloat(num);

// var absNum = Math.abs(num);

// console.log("The absolute value of " + num + " is " + absNum);



// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:




// var diceValue = Math.floor(Math.random() * 6) + 1;

// console.log("The value of the dice is: " + diceValue);



// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser


// var coin= Math.floor(Math.random()*2);

// if (coin===0) {alert ("head")



    
// }
// else {alert("tails")







//     6. Write a program that shows a random number between 1
// and 100 in your browser.




// var num = Math.floor(Math.random()*100)


// console.log("the number between 1 to 100 is"+":"+num);
    




// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms



// / Ask user for weight
// var weightInput = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms): ");

// // Parse user input
// var weight = parseFloat(weightInput);

// // Check if input is valid
// if (isNaN(weight)) {
//   // If input is not a number, try to extract number from string
//   var weightString = weightInput.toLowerCase().replace("kgs", "").replace("kilograms", "");
//   weight = parseFloat(weightString);
// }

// // Display weight in browser
// document.write("Your weight is: " + weight + " kg");




// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.




// var secretNum = Math.floor(Math.random()*10) + 1; // generate a number between 1 and 10
// var userName = parseInt(prompt("Enter a number between 1 and 10: ")); // get user input

// if (secretNum === userName) {
//   alert("Congratulations! You guessed the right number.");
// } else {
//   alert("Better luck next time. The secret number was " + secretNum + ".");
// }


