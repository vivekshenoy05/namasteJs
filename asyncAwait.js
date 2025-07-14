// topics covered
// what is async?
// what is await?
// how async await works behind the scenes?
// Examples of using async/await
// Error handling
// Interviews
// Async vs promises .then/.catch

// what is async?
// async is the keyword that is used before the function to create async function

// what is async function?

async function getData(){
    return 'hello'
}

// difference between normal function and async function
// this async function always returns promise

// either you can retuen promise from this function then it will be completly fine
// now if you dont return the promise -> , it you return a value then this function will automatically wrap the value inside
// the promise and returns a promise 
// this function will always returns a promise

// now will call the function
const data = getData(); // returns the promise
console.log(data);

// Promise {<fulfilled>: 'hello'}
// [[Prototype]]: Promise[[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "hello"

// now in data promise is present how we will get actual data?
// we can use  then() method

data.then(res=>console.log(res));

// output hello

// now we have seen if we return value from here
// what if we return promise

const pr = new Promise(function(resolve,reject){
    resolve('promise is fulfilled')
});

console.log(pr);

async function data1(){
    return pr;
}
const response = data1();
console.log(response)

response.then(res=>console.log(res))
// if return value is already a promise it will not wrap again with promise
// it will be returned as it is

// output promise is fulfilled

// now will see how await works

// assync and await combo is used to handle promises

// how we used to handle promises earlier do we neeed async again?

// earlier before async await

const p = new Promise(function(resolve,reject){
    resolve('promise is resolved')
})

// function getData(){
//     p.then(res=>console.log(res))
// }

// getData();

// now will see how do we handle this using async await

//create async function
 async function handlePromise(){
    //use will use await infront or promise
   const res =  await p;
    console.log(res)
};

//when you await p promise will resolve and data will come into variable p
 handlePromise();

// await is the keyword that can only be used inside async function
// and you write async keyword infront of promise and you resolve the promise