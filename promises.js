// promises in js

// will take the example of ecommerce website and this website has the cart functionality
const cart = ['pants','kurtas','pens'];
// and here there are 2 apis

createOrder(cart); // this func returns orderId
proceedToPayment(orderId);

// these 2 functions are dependent on each other and both are asynchronous functions
// first will see how we will write code using callbacks

// first we will wrap the proceedToPayment func to form callbackFunction 
// and this callback func is passed as parameter as the arguments to the createOrder function

createOrder(cart, function(){
    proceedToPayment(orderId);
})
// now it the job of the createOrder to create the order and call the callback function with orderID
// here there is issue that is inversion of control

// to solve this problems we can use promises
// we can write the code without using callbacks
// craateOrder Api will no longer take the callBack function it will take just take  cart details.
// it will return us the promise, we will capture taht promise in variable called promise

const promise = createOrder(cart);
// whenever this line is executed by js engine we will get the promise
// promise -> you can assume it to be empty object with some data value in it
// this datavalue will hold what createOrder api return to us

//  whenever JS engine will execute this line 27) it will return as a promise 
// promise is nothing but empty object  {data:undefined}.
// the program will just go on executing, after 5 or 6 sec or how much ever time it takes
// the promise object empty object will be filled with data automatically after whatever async time it takes

// now will attach callback function to this createOrdrFunction

promise.then(function(){
    proceedToPayment(orderId);
});

//  once we get data from createOrder api or have data inside callback functon,
// the callbackFunction that we attach to promise object will automatically called 

//  in earlier case we were passing the callback function to another function
// here in promises we are attaching callback function to a promise object
// in promises we will have control of the program with us

// here createOrder api will do only its job it will create the order and it will fill the promise object with data i.e orderId whenever
// it wants to.
// now whenever the promise object is filled with data it automatically calls the callback function and we will ahve control of the program

// earlier in callback scenario there were many doubts like what if the callback function is not executed or
// what if function is executed twice 

// promisess guarantee that functio will be executed once promise objects gets the data and it will execute only once

// now will see how exact promise object will lokk like

// fetch api is given by browser to make external api calls
// we will use this fetch functions to make the api call to github servers and we will get the users info



const GITHUB_API = 'https://api.github.com/users/vivekshenoy05'
// this opensource api will give the info of the username
// will fetch the userdetails
//  the fetch() functions will return us the promise

const user = fetch(GITHUB_API);
console.log(user)
// as soon as the line 69 is executed we will get promise inside this user variable

// when we add debugger in dev tool first we get
//  inside Script we get this
// GITHUB_API: "https://api.github.com/users/vivekshenoy05"
// user : <value unavailable></value>

// next we get
// Script
// GITHUB_API: "https://api.github.com/users/vivekshenoy05"
// user: Promise
// [[Prototype]]: Promise
// [[PromiseState]]: "pending"
// [[PromiseResult]]: undefined

// here promise is in pending state
// there are 2 things one is state of a promise and next is result
// PromiseResult will contain whatever data that fetch method returns
// PromiseState tells us at what state the promise is
// initially PromiseState will be in pending state and then once we get data or result PromiseState changes to fulfilled state 

// in line no 9 once we get the console output as
// Promise {<pending>}
//     [[Prototype]]: Promise
//     [[PromiseState]]: "fulfilled"
//     [[PromiseResult]]: Response

// wht here in first its pending and then we expand the promise object its fulfilled?
// as we all know JS engine quickly executes the code line by line at this stage promise was pending
// fetch api is async and it takes some time to fetch the data and fill it back
// JS waits for none and it prints the console so ist pending
// once we get data from the fetch api the chrome broswser makes promise state as fulfilled

// data is inside the body this is readable stream we cant see readable stream 
// we can convert the readable stream into json and extract it

// now what if call back is attached to the Promise

user.then(function(data){
    console.log(data.json())
})

// here inside data wwe get response from fetch api
// .json() method is used to convert readable stream into usable content

// JS guarantees that this promise object can be resolved only once either it will be success or failure
// over here it can be rejected also
// state can be only 3 ibn promise
// 1. pending
// 2.fullfilled
// 3. rejected

// promise object are immutable i.e
// whenever promise is fullfilled and have data we can pass the data to further apis or function
// no nned to worry that someone can mutate that data
// in this eg you cannot edit the data

// interview
// what is the promise?
// promise object is a placeholder which will be filled later with the value which we receive from async operation
// accoring to mdm docs
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// promise helps us in handling the callback hell
// using promise chaining

// code for callback hell
const cart = ['apple', 'mango', 'pant'];

createOrder(cart, function(){
    proceedToPayment(function(){
        showOrderSummary(function(){
            updateWallet()
        })
    })
});

// using promise chaining
const promise = createOrder(cart);
promise.then(function(orderId){
    proceedToPayment(orderId);
})

// we can also code like this
const promise1 = createOrder(cart)
.then(function(orderId){
    return proceedToPayment(orderId);
}).then(function(paymentInfo){
    return showOrderSummary(paymentInfo);
}).then(function(orderSummary){
    return updateWallet(orderSummary);
})

// data from proceedToPayment should pass down the chain and so on
// so we return promise in promise when we are chaining in it
// this how we will get the data properly in the chain
// this is how code does not grow horizontally and its in meaningful fashion
//  we can even use arrow function
// if we have one line in program we don need arrow function

const promise2 = createOrder(cart)
.then(orderId=> proceedToPayment(orderId))
.then(paymentInfo=> showOrderSummary(paymentInfo))
.then(orderSummary=>updateWallet(orderSummary))

// next will see how we can create the promise