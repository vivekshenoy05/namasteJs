// map function is used to transform the array and returns the new transformed array

const arr = [5,1,3,2,6];

function double(x){
    return x*2
}
function triple(x){
    return x*3;
}

function binary(x){
    return x.toString(2)
}

const output = arr.map(double);
const output2 = arr.map(triple);
const output3 = arr.map(binary);

console.log(output);
console.log(output2);
console.log(output3);

// other vailid methods

const output4 = arr.map(function(x){
    return x*4
});
console.log(output4);

// when there is single statement then no need to return
const output5 = arr.map((x)=>x*5);
console.log(output5);

