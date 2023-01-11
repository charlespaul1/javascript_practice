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
const numbers = [1, 2, 3, 4, 5, 3, 1, 2]
//using the lastIndexOf function
//lastIndexOf gives the index position of the element being refered to else it gives -1
console.log('the last index of 5 is:', numbers.lastIndexOf(5))
//checking if an item exists in an array using includes
//it returns true if it exists else false

console.log('is 5 in the array?: ', numbers.includes(5))
//checking array using isArray(), returns true if is array else false
console.log('is numbers an array?: ', Array.isArray(numbers))
//converting array to string using toString()
console.log('the string version of numbers array', numbers.toString())
const names = ['wanjiru', 'mogaka', 'muthokoi', 'wainanina']
let new_names = names.toString()
console.log(new_names)
//joining array elements
//using join - it joins elements of the array & returns a string ,
//by default it joins with a comma but another string parameter 
//can be passed and used to join the items
const numbers_t = [1, 2, 3, 4, 5]
console.log('joining the numbers_t array items', numbers_t.join())
//using a space
console.log('joining the numbers_t array items', numbers_t.join(' '))
//using a comma and a space
console.log('joining the numbers_t array items', numbers_t.join(', '))
//slice array elemments (to cut out multiple items in a range)
// slice takes two parameters starting and ending point, it does'nt include the end  position
console.log(numbers_t.slice(1, 4))
//adding item to an array using push
const my_array = [20, 23, 45, 30]
my_array.push(101) 
console.log(my_array)
//removing an item at the end using pop
my_array.pop()
console.log(my_array)
//removing an element from the beginning using shift
my_array.shift()
console.log(my_array)
//adding an element from beginning using unshift
my_array.unshift(67)
console.log(my_array)
//reversing an array using reverse
my_array.reverse()
console.log(my_array)
//sorting an array
const alphabet = ['c', 'e', 'a', 'f', 'b', 'd', 'i', 'h', 'g']
console.log(alphabet)
alphabet.sort()//sorts in order
console.log(alphabet)
alphabet.reverse()
console.log(alphabet)
// array of arrays - an array within an array
const first_nums = [1,2,3,4,5]
const sec_nums = [6, 7, 8, 9, 10]
const full_list = [first_nums, sec_nums]
console.log(full_list[0])
const companIes = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon']
//printing number of elements in companIes
console.log('number of companies is:', companIes.length)
//printing the first item
console.log(companIes[0])
//the middle company
console.log(companIes[3])
//to uppercase
const uppercasedArray = String(companIes).toUpperCase().split(",  ")
console.log(uppercasedArray)










