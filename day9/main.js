//onjects in js
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
//getting skills without last skills
let skillWithoutLastSkill = this.skills.splice(0,this.skills.length - 1).join(', ')
console.log(skillWithoutLastSkill)