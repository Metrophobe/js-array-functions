let array = [1,2,3,4,5,6,7,8,9,10];
let secondArray = [11,12,13,14,15,16,17,18,19,20];
let thirdArray = [5,4,3,2,1];

//populate
let populateArrays = (element,array) => {
    Array.from(document.getElementsByClassName(element)).map(e => e.innerHTML = array);
}

//map function
let map = (array) => {
    let result = [];
    array.map((e,i)=>{
        result.push(`<br>- element at => ${i} = ${(e*2)}`);
        document.querySelector('.map').innerHTML = result;
    })
}

//find function
let find = (array) => {
    let result = array.find(e => e > 8);
    document.querySelector('.find').innerHTML = result;
}

//findIndex function
let findIndex = (array) => {
    let result = array.findIndex(e => e > 8);
    document.querySelector('.findIndex').innerHTML = result;
}

//filter function
let filter = (array) => {
    let result = array.filter(e => e > 5);
    document.querySelector('.filter').innerHTML = result;
}

//reduce function
let reduce = (array) => {
    let result = array.reduce((accumulator,currentValue) => accumulator + currentValue);
    document.querySelector('.reduce').innerHTML = result;
}

//concat function
let concat = (one,two) => {
    let result = one.concat(two);
    document.querySelector('.concat').innerHTML = result;
}

//concat function
let slice = (array,start,end) => {
    let result = array.slice(start,end);
    document.querySelector('.slice').innerHTML = result;
}

//concat function
let splice = (array, start, deleteCount, replaceWith) => {
    let deleted =  array.splice(start,deleteCount, replaceWith);
    document.querySelector('.deleted').innerHTML = deleted;
    document.querySelector('.splice').innerHTML = array;
}


//Run all functions
document.addEventListener('DOMContentLoaded',(event)=>{
    populateArrays('array',array);
    populateArrays('second',secondArray);
    map(array);
    find(array);
    findIndex(array);
    filter(array);
    reduce(array);
    concat(array,secondArray);
    slice(array,1,9);
    splice(array,0,5,thirdArray);
    
})