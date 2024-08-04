// there are some important functions for react
// they are map, reduce and filter


// if we want to work on each element of the array
// or use them one by one, we use map to iterate through

const array = ["chad", "ali", "ani"]
array.map((name)=> {
    return name + " Zafar"; 
    //now each element has 
    // zafar added to it.
})

//the filter function also goes through the array
// as the name suggests, it filters.

array.filter((name)=> {

    return name !== "ali";
    // returns all names except ali 
})