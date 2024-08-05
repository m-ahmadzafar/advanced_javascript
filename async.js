// learn about async await fetch and promises

// In our code, we want to ensure that it isnt 
// accessing an object before it exists. 
// For Example:

const fetchData = async () => {
    const data = await fetch("https::/randomapi/api");
    const name = data.person?.name;
}

// The ? after person ensures that it is true
// and the value is only assigned if it is.