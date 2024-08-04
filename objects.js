//destructuring objects

const person = {
    name: "Ahmad",
    age: 21,
    chad: true
}
// now if we want to make variables, we can say
// const name = person.name;
// const age = person.age;
// const chad = person.chad;

// now instead of all of these long lines, we can destructure it
const {name, age, chad} = person


// now if we want to copy all the data in person
// for person2 but change something else, we can
// use the ... operator

const person2 = {...person, name: "Ali"} 
//so its ditto except name;

// we can also do this with arrays
const array = ["yo", "yo2", "yo3"];
const array2 = [...array, "yo4"];
