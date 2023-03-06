// creating a set from an array
const cars = ['beamer', 'jeep', 'vw', 'kia','mustang']
const mySet = new Set(cars)
console.log(mySet)
// adding an element to a set
mySet.add('buggati')
console.log(mySet)
// checking size of a set
const setSize = mySet.size

console.log(setSize)
// checking an element in the set
console.log(mySet.has('vw'))
// Create a set containing 0 to 10 using loop

let numbersSet = new Set();
for (let i = 0; i <= 10; i++){
    numbersSet = numbersSet.add(i);
}
console.log(numbersSet)
// find  a union b
let a = [1,2,2,4,5,6,7,8,9,2,3,]
let b = [2,3,4,2,1,46,75,7,4,2,8,0,67,5,3]
let c = [...a, ...b] 
let A = new Set(a)
let B = new Set(b)
let C = new Set(c)
console.log(C)
// find intersection 
// let m = [...a]
// let n = [...b]
// let o = m.filter((num) => !n.has(num))
// let p = new Set(o)
// Create a map of countries and number of characters of a country
countries = [
    ['Kenya', 'Nairobi'],
    ['Sudan', 'Khartoum'],
    ['Egypt', 'Cairo'],
  ]

const countriesMap = new Map(countries)
console.log(countriesMap)
// finding the size of the map created
console.log(countriesMap.size)
