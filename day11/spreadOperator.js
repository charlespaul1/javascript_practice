// destructing an array
const myArray = [1, 2, 4, 5]
let [num1, num2, num3, num4] = myArray
console.log(num3)
const fullStack = [['html', 'css', 'js', 'react'], ['Node', 'Express', 'MongoDB']]
let [frontEnd, backEnd] = fullStack
console.log(backEnd)


// if you want to skip an item in the array use additional commas
const myStack = ['html', 'css', 'react', 'figma', 'javascript']
let [skill1, skill2, , skill4] = myStack

console.log(skill1, skill2, skill4)


// using spread operator
const numbers = [2, 3, 4, 5, 6, 7, 8, 9]

let [namba1, namba2, ...namba4] = numbers
console.log(namba4)

// destructing using iteration
const countries = [['Nigeria', 'Lagos'], ['Ghana', 'Accra'], ['Kenya', 'Nairobi'], ['South Africa', 'Cape town'], ['Tanzania', 'Dodoma'], ['Uganda', 'Kampala']]
for (let[Country, City] of countries){
    console.log(Country, City)
}
// destructuring an object
const person = {
    name: 'Charlespaul',
    age: 24,
    height: "6'3",
    nationality: 'Kenyan'
}
let {name, age, height, nationality} = person
console.log(name, age, height,)
// object parameter destructuring
const rectangle = {
    length: 13,
    width: 14
}
// function for calculating the perimeter
const perimeter = ({length, width}) => {
    return 2 * (length + width)
}

console.log(perimeter(rectangle));
