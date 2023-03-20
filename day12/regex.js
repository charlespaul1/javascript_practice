// declaring a regular expression without a flag
let word = 'love'
let regex = new RegExp(word)
// declaring with a flag (a global flag and a case sensitive one)
let pattern = 'love'
let flag = 'gi'
let reggex = new RegExp(pattern, flag)
// shorthand
let regexx= /love/gi
let str = 'my name is barry alen and i am the fastest kinuthia on earth'
const patan = /the/
const result = patan.test(str)
const result1 = str.match(patan)
console.log(result1);

// using search()
let str1 = 'i love javascript'
const patern = /love/g
const result2 = str1.search(patern)
console.log(result2);
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'
matchReplaced = txt.replace(/Python|python/g, 'javascript')
console.log(matchReplaced);