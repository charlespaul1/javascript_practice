//Get user input using prompt(“Enter your age:”). 
//If user is 18 or older , give feedback:'
//You are old enough to drive' 
//but if not 18 give another feedback stating to wait for the 
//number of years he needs to turn 18.
let rem_yrs;
let age = prompt('enter your age: ');
if (age >= 18){
    console.log('your are old enough to drive');
}
else if (age < 18 ) {
    rem_yrs = 18 - age
    console.log(`you are left with,  ${rem_yrs} year(s) , then you can drive`);
}
//Compare the values of myAge and yourAge using 
//if … else. Based on the comparison and log the result to console 
//stating who is older (me or you). 
//Use prompt(“Enter your age:”) to get the age as input.
let myAge = prompt('My age: ')
let youAge = prompt('Your age: ')
if (myAge > youAge) {
    let age_diff = myAge- youAge
    console.log(`your older than me with ${age_diff}`)
} else {
    age_diff = youAge - myAge;
    console.log(`im older than you with ${age_diff}`)
}
//If a is greater than b return 
//'a is greater than b' else 'a is less than b'. 
//Try to implement it in to ways

//using if else
//ternary operator.
let a = prompt('Enter number (a): ')
let b = prompt('Enter number (b): ')
if (a == b){
    console.log(`${a} is equal to ${b}`)
}
else if (a > b){
    console.log(`${a} is greater than ${b}`)
} else {
    console.log(`${a} is less than ${b}`)
} 

//Even numbers are divisible by 2 and the remainder is zero.
// How do you check, if a number is even or not using JavaScript?
let number = prompt('Enter number: ')
if ((number % 2) == 0){
    console.log(`${number} is even`)
} else {
    console.log(`${number} is odd`)
}
//Write a code which can give grades to students according to theirs scores
//enter score
let score = prompt('Enter your score: ')
//check where the score lies and give output of the 
//grade80-100, A, 70-89, B, 60-69, C, 50-59, D ,0-49, F
if (score >= 80){
    console.log(`${score}, is garde A`)
} else if (score >= 70){
    console.log(`${score} is grade B`)
} else if (score >= 60){
    console.log(`${score} is grade C`)
} else if (score >= 50){
    console.log(`${score}, is grade D`)
}else {
    console.log(`${score} is grade E`)
}
//Check if the season is Autumn, Winter, 
//Spring or Summer.  using months
// enter month
let monthInput = prompt('what month is it ? ')
let month = monthInput.toLowerCase()
switch (month){
    case month == 'september' || 'october' || 'november':
        console.log('Autumn season');
        break;
    case month == 'december' ||'january' ||'february':
        console.log('Winter season');
        break;
    case month == 'march'|| 'april'||'may':
        console.log('Spring season');
        break;
    case month == 'june' || 'july' || 'august':
        console.log('Summer season');
        break;
    default:
        console.log('Entered value is not a month');
}
