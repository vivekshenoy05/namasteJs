// used at the place where you want to take all the elements of the array and comeup with
// single value out of them

const arr = [5,1,3,2,6];
console.log(arr.length)

// normal code without reduce function

const sum = function(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum = sum + arr[i]
    }
    return sum;
}

console.log(sum(arr));

// now with reduce array method

// the callback function in array.reduce() takes 2 parameters accumulator and current
// the callback function is iterated over each and every element in an array
// the current parameter represents the value inside the array function i.e current array element [5,1,3,2,6]
// the first parameter is used to accumulate the value or accumulate the result
// here current parameter or crr is arr[i] when compared to previous eg and 
// accumulator here is the sum
// in below eg acc is acting like the sum variable i.e its accumulating the sum
// acc should be initialized with initial value for the first go
// initial value to accumulator is passed as second parameter to reduce function
// the reduce method takes 2 arguments i.e callback function and initial valuse of accumulator


const res = arr.reduce((acc,cur)=>{
    return acc = acc+cur;
},0);

console.log(res)


// find the maximum number in an array

const maxNum = function(arr){
    let max = 0;
    for(let i =0; i<arr.length; i++){
        if(arr[i]>max){
            max= arr[i];
        }
    }
    return max;
}

console.log(maxNum(arr));

// using reduce method

const maximumNum = arr.reduce((acc,cur)=>{
    return cur>acc?acc=cur:''
},0);

console.log(maximumNum)