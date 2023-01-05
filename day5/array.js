//arrays
//checking arrays length
const fruits = ['banana', 'orange', 'mango', 'lemon']
console.log('the number of items in the array:', fruits.length)
//creating an array using split
let nm = 'wabomba'
const nameArray = nm.split('')
console.log(nameArray)

let companies = 'meta, microsoft, apple, google, tata, safaricom'
const compArray = companies.split(',')
console.log(compArray)
// elements in ana array are accessed using index
const fruitz = ['banana', 'orange', 'mango', 'lemon']
firstFruit = fruitz[0]
lastFruit = fruitz[3]
console.log(`the first fruit is a ${firstFruit} and the last one is a ${lastFruit}`)
the_last_index = fruitz.length - 1
console.log(fruitz[the_last_index])
//modyfing array element
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
countries [0] =  'Argentina'//replacing albania with argentina
console.log(countries)
//manipulating an array
//array constructor
const myArray = Array()// creates an empty array
console.log(myArray)
const sixMptvalues = Array(6)
console.log(sixMptvalues)
//creating static values with fill
const arr = Array()//empty array
const six_X_values = Array(6).fill('X')//creates 6 element values that are filled with X
console.log(six_X_values)

const eight_0_values = Array(8).fill(0)
console.log(eight_0_values)
//concatenating arrays
const Arr1 = ['pigs', 'ps', 'chicken']
const arr2 = ['job', 'business']
const Arr3 = Arr1.concat(arr2)
console.log(Arr3)
const fruitArr = ['banana', 'orange', 'mango', 'lemon']
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
const comboArray = vegetables.concat(fruitArr)
console.log(comboArray)
//getting the index of an element in an array
console.log('the index of potato in vegetables is: ', vegetables.indexOf('Potato'))
//checking if an item exists in an array
let index = vegetables.indexOf('Onion')
if (index === -1){
    console.log('the item does not exist in the array')
} else {
    console.log('the item is in the array at index: ', index)
}
//using ternary
let itemIndex = fruitArr.indexOf('mango')
itemIndex === -1 ? console.log('item is not in the array') : console.log('item is in the array at index: ', itemIndex)

let arrIndex = Arr1.indexOf('ps')

arrIndex === -1 ? console.log('item not in array') : console.log('item is in the array at index: ', arrIndex)
//getting last index of an array
