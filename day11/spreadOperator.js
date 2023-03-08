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
let {name, age, hight, nationality} = person
console.log(name, age, hight,)
// object parameter destructuring
const rectangle = {
    length: 13,
    width: 14
}
// function for calculating the perimeter
const Perimeter = ({length, width}) => {
    return 2 * (length + width)
}

console.log(Perimeter(rectangle));
//  using spread operator to get the rest of array elements
const teams = ['Arsenal', 'Man City', 'Man U', 'Tottenham', 'liverpool', 'Newcastle', ' fulham', 'brighton', 'brentford', 'chelsea']

let [one, two, three, ...rem] = teams
console.log(three, rem);
// using spread operator to copy an array
let premierLeague = [...teams]
console.log(premierLeague);

const fullStackDev = [...frontEnd, ...backEnd]
console.log(fullStackDev);

// using spread operator to copy an object
const user = {
    name: 'Charlespaul Wabomba',
    title: 'Programmer',
    country: 'Kenya',
    city: 'Kisumu'
}
 let copiedUser = {...user}
 console.log(copiedUser)
//  modifying the object while coping
let newCopiedUser = {...user,  city: 'Bungoma'}
console.log(newCopiedUser)
// using spread operator in arrow function

const sumOfNumbers = (...args) => {
    let sum = 0;
    for ( let number of args){
        sum += number
    }
    return sum 
}

console.log(sumOfNumbers(2,3,4,5,6,7,8,9,0,7,7,4,242));

const constants = [2.72, 3.14, 9.81, 37, 100]
// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(pi, waterBoilingTemp);
const Countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
// Destructure and assign the elements of countries array to fin, est, sw, den, nor
const [fin, est, sw, den, nor] = Countries
console.log(den);
const Rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
// Destructure the rectangle object by its properties or keys.
let {width, height, area, perimeter} = Rectangle
console.log(area);
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS', 'react'],
  age:20
}
]
// Iterate through the users array and get all the keys of the object using destructuring
users.forEach(({name, scores, skills, age}) => {
    console.log(Object.keys({name, scores, skills, age}));
  });
// Find the persons who have less than two skills
const lessThan2 = users.filter(user => user.skills.length < 2);
console.log(lessThan2);