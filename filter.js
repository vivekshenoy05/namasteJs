// filter method is used to filter the values inside the array

// find odd
const arr = [5,1,3,2,6];

const oddNumbers = arr.filter((x)=> x % 2);
console.log(oddNumbers);

// find even numbers
const evenNumbers = arr.filter((x)=>(x%2===0));
console.log(evenNumbers);

// greter than 4
const greaterThanFour = arr.filter((x)=>x>4);
console.log(greaterThanFour);

