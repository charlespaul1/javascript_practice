// for warning
console.warn('This is a warning')
// for error
console.error('you\'ve done an error ')
// displaying data as tabular
const names = ['masika', 'wabomba', 'charlespaul', 'software developer']
console.table(names);
const user = {
    name: 'cp',
    age: 24,
    occupation: 'software developer'
}
console.table(user);
const users = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]
  console.table(users)
//   timing an operation
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
    ['Kenya', "Nairobi"],
    ['Uganda', 'Kampala'],
    ['Rwanda', 'Kigali']
  ]
console.time('regular for loop')
for (let country of countries){
    console.log(country);
}
console.timeEnd('regular for loop')
// displaying info message
console.info('javascript practice');
// assertion message
console.assert(4 < 3, 'That is not it cunt');
const namez = ['Asabeneh', 'Brook', 'David', 'John']
const Countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const User = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const Users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(namez)
console.groupEnd()

console.group('Countries')
console.log(Countries)
console.groupEnd()

console.group('Users')
console.log(User)
console.log(users)
console.groupEnd()