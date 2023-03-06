//objects in js
a = 78
b = 8
function aboutScope (){
    console.log(a, b);
    if (true){
        console.log(a,b)
    }
}
console.log(a, b)
//object example
const person = {
    name: 'masika wabomba',
    age: 30,
    country: 'France',
    city: 'paris',
    skills: ['HTML',
     'CSS', 
     'Javascript',
      'React',
       'Node',
       'MongoDB', 
       'AWS',
       'GCP'],
    isMarried: false,
    getGeoLocation: function(){
        return `${this.country} ,${this.city}`
    }
}
console.log(person)
//getting values from an object
// using . followed by key name if the key name is a none word
console.log(person.name);
console.log(person.skills)
//using square bracket and a key name inside quote
console.log(person['age'])
console.log(person['isMarried'])
//using this keyword to access methods
console.log(person.getGeoLocation())
//an object is mutable meaning it can be modified
person.nationality = 'Kenyan'
person.title = 'cloud engineer'
person.skills.push('kubernetes')
person.skills.push('sass')
console.log(person)
//manipulating an object
//Object.assign: To copy an object without modifying the original object
const car = {
    model: 'jeep wrangler',
    year: 2022,
    color: 'grey',
    capacity: '4 seater',
    engine: '250 cc'
}
//copying car properties to  using Object.assign
const newCar = Object.assign({}, car)
console.log(newCar)
//getting keys or properties of an object as an array
const keys  = Object.keys(newCar)
console.log(keys)
//getting values of an object as an array using Object.values
const values = Object.values(car)
console.log(values)
//getting keys and values of an objet using Object.entries
const myEntries = Object.entries(car)
console.log(myEntries)
//checking if a specific key or property exist in an object
console.log(newCar.hasOwnProperty('model'))
const dog = {};
console.log(dog)
//adding properties to dog object
dog.name = 'rex'
dog.legs = 4
dog.color = 'black'
dog.age =  '6 months'
dog.bark = function(){
    return 'woof woof'
};
let dogValues = Object.values(dog)
console.log(dogValues)
dog.breed = 'german shepherd'
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
      },
      Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
      },
      John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
      },
      Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
      },
      Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
      }
    }
    //finding the user with many skills in the users object
    
const userWithManySkills = users => Object.entries(users)
.reduce((res, [username, data]) => {
  if(data.skills.length > res.maxSkills){
    return {
      maxSkills: data.skills.length,
      user: {
        [username]: data
      }
    }
  }
  return res
}, 
{ 
maxSkills: -1,
user: undefined
}
).user
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

console.log(userWithManySkills(users))
