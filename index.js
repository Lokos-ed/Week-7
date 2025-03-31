//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//Programmatically subtract the value of the first element in the array from the value in the last element of the array.
//Do not use numbers to reference the last element, find it programmatically.
//ages[7] - ages[0] is not allowed!
//Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//Use a loop to iterate through the array and calculate the average age.

console.log("Question 1");
//This creates an array under the name of "ages"
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
//This prints out the array after the string: "Ages:"
console.log("Ages:", ages);
//This creates a let variable that is equal to whatever the last value of the ages array is subtracted by the value of the first element in the array.
let minusAges = ages[ages.length - 1] - ages[0];
//This prints out the value of the variable called "minusAges" after printing the string which displays as "minusAges"
console.log("minusAges", minusAges);
//This pushes a new value to the end of the ages array.
ages.push(100);
console.log("Ages after pushing a new value", ages);
let minusAgesPush = ages[ages.length - 1] - ages[0];
console.log("minusAgesPush", minusAgesPush);

let sumOfAges = 0;

//This is a for loop that creates an index that starts at the value of 0, continues until the index is equal to the length of the ages array, and increments each time it loops
for(let i = 0; i < ages.length; i++) {
//This is setting the sumOfAges value to the sum of sumOfAges and ages as the loop is going. For the first loop sumOfAges will be set to (0 + 3), for the second it will be set to (3 + 9) and so on.
sumOfAges += ages[i];
console.log("index", i, "sumOfAges", sumOfAges);
}
console.log("Total Sum:", sumOfAges);
let average = sumOfAges / ages.length;
console.log("Average Age:", average);
console.log("----------------------------------------------------------------");

//2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
//Use a loop to iterate through the array and calculate the average number of letters per name.
//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
console.log("Question 2");
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let totalChars = 0;

for (let i = 0; i < names.length; i++) {
totalChars += names[i].length;
console.log("Index:", i, "Name:", names[i], "Total Characters", totalChars);
}

let averageNames = totalChars / names.length;
console.log("Average Character Amount", averageNames);

let concatNames = "";
for (let i = 0; i < names.length; i++) {
// This loop is printing each name in the array out while combining all the names it has gone over into the same message throughout each loop.
    concatNames = concatNames.concat(names[i] + " ");
    console.log(i, "Names Concatenated:", concatNames);
}
console.log("----------------------------------------------------------------");

//3. How do you access the last element of any array?
console.log("Question 3");
console.log("array[array.length - 1]");
console.log("----------------------------------------------------------------");
//4. How do you access the first element of any array?
console.log("Question 4");
console.log("array[0]");
console.log("----------------------------------------------------------------");

//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//For example:

//5 (example). let names = ["Kelly", "Sam", "Kate"];    // starting with this array
//let nameLengths = [5, 3, 4];             // create a new array

console.log("Question 5");
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
//This pushes the length of the name in the current index position of the names array to the namesLength array for each iteration of the loop.
nameLengths.push(names[i].length);
console.log("Name Length Array:", nameLengths);
}
console.log("----------------------------------------------------------------");
//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
console.log("Question 6");
//This whole loop effectively does the same thing as the sumOfAges loop does but for the nameLengths array instead.
let charsTotal = 0;
for (let i = 0; i < nameLengths.length; i++) {
    charsTotal += nameLengths[i];
    console.log("CharsTotal:", charsTotal);
}
console.log("Total Character Amount:", charsTotal);
console.log("----------------------------------------------------------------");

//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
console.log("Question 7");
function concatWords(word, n) {
console.log("Word Par:", word, "n Par:", n);
//This creates a variable called "concat" which makes the word in concatWords be repeated by the number that is represented by n in concatWords. .repeat will make it so it only accepts numbers.
let concat = word.repeat(n);
console.log(concat);
}
concatWords("Hello", 3);
console.log("----------------------------------------------------------------");
//8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
console.log("Question 8");
function fullName(firstName, lastName) {
    let fullName = firstName + " " + lastName
    console.log(fullName);
}
fullName("AB", "CD");
console.log("----------------------------------------------------------------");
//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
console.log("Question 9");
let numbers1 = [100, 200, 300, 400];
let numbers2 = [1, 2, 3, 4];

function sumNumbersArray(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
        console.log("Total:", total);
    }    

    if (total > 100) {
        console.log("Total:", total, true);
        return true
    } else {
        console.log("Total:", total, false);
        return false
    }

}
sumNumbersArray(numbers1);
console.log("----------------------------------------------------------------");
//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
console.log("Question 10");
function calculateNumbersAverage(array) {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        total += array[i]
        console.log("Calculate Function, Total:", total);
    }

    let average = total / array.length
    console.log("Average:", average);
    return average;
}
calculateNumbersAverage(numbers1);
console.log("----------------------------------------------------------------");
//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
console.log("Question 11");
let numbers3 = [100, 100, 100];
let numbers4 = [100, 100, 99];

function twoAverages(array1, array2) {
    console.log("Parameters:", array1, array2)
    let total1 = 0;
    let total2 = 0;
    for (const number of array1) {
        total1 += number;
        console.log("Current Number Loop1:", number, "Total 1:", total1);
    }

    for (const number of array2) {
        total2 += number;
        console.log("Current Number Loop2:", number, "Total 2:", total2);
    }
    //This makes the average equal the total divided by the length of the array.
    let average1 = total1 / array1.length;
    let average2 = total2 / array2.length;

    console.log("Averages:", average1, average2);

    if (average1 > average2) {
        console.log(true);
        return true
    } else if (average1 < average2) {
        console.log(false);
        return false
    } else {
        console.log("Numbers are equal");
    }

}
twoAverages(numbers3, numbers4);
console.log("----------------------------------------------------------------");
//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
console.log("Question 12");

function willBuyDrink(isHotOutside, moneyInPocket) {
console.log("Parameters:", isHotOutside, moneyInPocket);
let buyDrink = isHotOutside === true && moneyInPocket > 10.5;
console.log("Buy a drink?", buyDrink);
return buyDrink;
}
//This command passes the values into the function
willBuyDrink(true, 11);
console.log("----------------------------------------------------------------");
//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
console.log("Question 13");
function getDessert(caloriesEatenToday, mealsEatenToday) {
    console.log("Parameters:", caloriesEatenToday, mealsEatenToday);
    let buyDessert = caloriesEatenToday < 1300 && mealsEatenToday < 3;
    console.log("Get dessert?", buyDessert);
}
getDessert(1000, 2);

console.log("I have a sweet tooth and sometimes eat dessert when I'm not hungry or have had too many calories. This will help me keep better track of if I can get dessert based on how much I've eaten that day and how many calories I've had.");