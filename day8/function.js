//a function without a parameter
function square(){
    let num = 2
    let sq = num * num
    console.log(sq)
}
square()//calling a function
function addTwoNumbers(){
    let numberOne = 32
    let numberTwo = 11
    let sum = numberOne + numberTwo
    console.log(sum)
}
addTwoNumbers()
///function returning  value
function printFullName (){
    let firstName = 'charlespaul'
    let secondNAme = 'Wabomba'
    let space = ' '
    let fullName = firstName + space + secondNAme
    return fullName
}
console.log(printFullName())
function addTuNumbers (){
    let numberWan = 20
    let numberTu = 19
    let sum = numberWan + numberTu
    return sum
}
console.log(addTuNumbers())
//function with one parameter
//during calling / invoking one argument is needed
function areaOfCircle (r){
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(7))

function square(number){
    return number * number
}
console.log(square(12))

//function with two parameters
// two arguments are needed
function sumTwo(a, b){
    return a + b
}
console.log(sumTwo(2, 7))
function printFullName(firstName, lastName){
    return `${firstName} , ${lastName}`
}
console.log(printFullName('wabomba', 'Masika'))
//sum of the numbers in an array
function sumArray(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum = arr[i] + sum;
    }
    return sum


}

arr = [2,3,44,5,76,8,8,98,08,756,64,64]
console.log(sumArray(arr))

//arrow function
const areaCircle = (radius) => {
    let area = Math.PI * (radius * radius);
    return area;
}
console.log(sumArray(7))
//functions  that take unlimited number of parameters
function sumAll(){
    console.log(arguments)
}
console.log(sumAll(3, 5, 6,56, 7))
function sumAllNums(){
    sum = 0;
    for (let i = 0; i < arguments.length; i++){
    sum += arguments[i]
    }
    return sum
}
console.log(sumAllNums(43,5,7,88,9,23,65,34,13,5,6,6,4))
//unlimited number of functions in an arrow function
//a spread operator  and any parameter name  is used to implement unlimited no. of arguments
const sumAllNumbs = (...args) =>{
    console.log(args)
}
sumAllNumbs(24, 4,5,6,86,8,9,95)
//function declaration
const summAllNums = (...args) =>{
    let sum = 0;
    for (const element of args){
        sum += element
    }
    return sum
}
console.log(summAllNums(23, 42,35,6,758,8,45,2,647,74,3,9,8,79))
//define a func called new name and print your name
const myfullName = (...args) => {
    lasName = `wabomba`
    firname = `cp`
    console.log(lasName, firname)

}

myfullName()
//anonymus function
const anonymusFun = function(){
     
    console.log('anonymus function')
}
console.log(anonymusFun())
//expresion function (anonymous functions assigned to a variable)
//example
const Square = function(n){
    return n * n
}
console.log(Square(23))
//calculating area of a rectangle
function AreaRectangle(l, w){
    let area = 0;
    area = l * w;
    return area
}
console.log(AreaRectangle(7, 9))
//perimeter of a rectangle
function perimeter(l, w){
    let perimeter = 0;
    perimeter = 2 * (l + w);
    return perimeter
}
console.log(perimeter(7, 9))
//returning largest number among three numbers
const largestNum = (x, y, z) => {
    if (x == y && z){
        console.log('they are all equal')
    }
    else if (x > y && y > z){
        console.log('x is greater')
    }
    else if ( y > z && y > x) {
        console.log('y is the largest')
    }
    else if (z > x && z > y){
        console.log('z is the greatest')
    }

}
largestNum(55, 1, 2)
//Declare a function name printArray. 
//It takes array as a parameter and it prints out each value of the array.
const printArray = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum
}
const arre = [3,4,5,2,4,3]
console.log(printArray(arre))
