//concatenation can be down  by using + sign or using template literals
//using +
let string1 = 'charles'
let string2 = 'paul'
let first_name = string1 +string2
let space = " "
let last_name = "wabomba"
let ful_name = first_name + space + last_name
document.write('first name is:',first_name)

document.write('\n')
document.write('\n')
document.write('last_name is:',last_name)
document.write('the ful name is:',ful_name)
//using template literals
let country = 'Kenya'
let job = 'software engineer'
let personal_info = `i am ${ful_name}, i'm a ${job} based in ${country}`
document.write(personal_info)