// arrow functions vs normal functions


export default function normal (){

}

export const arrow = () => {
     
}

//we use arrows functions for
// 1- concise syntax
// example:  
const add = (a,b) => a+b; 
// 2- Implicit return
const square = n => n * n;
// 3- they cannot be used as constructors
// 4- Lexical this Binding: Arrow functions do not have their own this context;
//    instead, they inherit this from the enclosing lexical scope.
//    This is particularly useful for maintaining the correct this context in 
//    callbacks and event handlers.
    function Person() {
        this.age = 0;

        setInterval(() => {
        this.age++; // `this` correctly refers to the Person instance
        }, 1000);
    }
const p = new Person();
// Arrow functions do not have an arguments object, which can 
// help avoid potential confusion with the arguments object 
// in traditional functions. Instead, you can use rest 
// parameters to achieve similar functionality.


// anonymous function
() => {}