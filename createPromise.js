//  how we can create the own promise
// Error handling
// Promise chaining
const cart = ['apple', 'mango', 'pant'];

const promise1 = createOrder(cart)
.then(function(orderId){
    return proceedToPayment(orderId);
    console.log(orderId)
});

// wwill see how createOrder() will return the promise
// will see how we can create the new promise and sent it to the consumer

// we will create the createOrder function
// to create the promise we will use new keyword and promise constructor
// how do we call this promise constructor?
// the promise constructor will take the function and this function will have 2 parameters
// which is resolve and reject

// function createOrder(cart){
//     const pr = new Promise(function(resolve,reject){

//     });
//     return pr;
// }

// this is how promises in js are created
// the resolve and reject are the functions which are given by JS to build promises
// inside this function we will write the logic to create the order

// producer of promise
function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        // createOrder
        // validateCart
        // orderId
        if(!validateCart(cart)){
            const error = new Error('cart is not valid');
            reject(error)
        }
        // logic for creating the order
        const orderId = '12345';
        if(orderId){
            resolve(orderId)
        }

    });
    return pr;
}

function validateCart(){
    return true
}

// the promise should return either success or failure
// the success would be to returning the order id and failure would be to throw an error
// if cart is not validated we will just throw an error, we will reject the promise
// this is where resolve and reject comes into picture
// the resolve and reject are the functions which are passed by JS to us
// if we reject the promise the promise will be rejected
// who, so ever consuming this api or calling createOrder if the cart is not valid we will just reject it
// and throw an new error
// if everything is successful we will get the orderId
// if the orderId is valid or have the orderId we will just resolve our promise

// will add setTimeout to get eg like api calls
const cart = ['apple', 'mango', 'pant'];

const promise1 = createOrder(cart)
.then(function(orderId){
    // return proceedToPayment(orderId);
    console.log(orderId)
})
.catch(function(error){
    console.log(error.message)
})

function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        // createOrder
        // validateCart
        // orderId
        if(!validateCart(cart)){
            const error = new Error('cart is not valid');
            reject(error)
        }
        // logic for creating the order
        const orderId = '12345';
        if(orderId){
            setTimeout(()=>{
                resolve(orderId)
            },5000)
        }

    });
    return pr;
}

// function validateCart(){
//     return true
// }

// what happens if we reject the promise

function validateCart(){
    return false
}

// we got the error
// index.js:17 Uncaught (in promise) Error: cart is not valid
//     at index.js:17:27
//     at new Promise (<anonymous>)
//     at createOrder (index.js:12:16)
//     at index.js:5:18

// this error shows that we have not handled the exception in our code
// this error in browser console we need to handle it gracefully
// in above eg we have just written success part

// to handle error part promise also comes with catch() part 
// it is same like then() we can attach failure or reject case to it
// after handling error we only get error message in console
// i.e cart is not valid