//math operations
const Pi = Math.PI
document.write(Pi)
//round of to nearest number
document.write('>>>>> ',Math.round(Pi))
//rounding down
let numb = 54.81
document.write('>>>>>',Math.floor(numb))
//rounding up
document.write('>>>>>',Math.ceil(numb))
//minimum number 
let list = (9, 32, 43, 20001, 7, 32, 11, 32938)
document.write('>>minimum number is:  ',Math.min(list))
//max number
document.write('>> max number is : ', Math.max(list))
//getting a random number
let rand_number = Math.floor(Math.random() * 40)
document.write('>>>the random number is>> ',rand_number)
//absolute value of a number
document.write('Absolute value is: >',  Math.abs(-20))