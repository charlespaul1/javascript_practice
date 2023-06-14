// a function to check if an object is empty


const objectCheck = (obj) => {
    // geting the keys in the object
    const keys = Object.keys(obj)

    return keys.length === 0
}

const person = {
    name: 'mika',
    age: 211
}

console.log(objectCheck(person));