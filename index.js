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
// as soon as the line 69 is executed we will get promise inside this user variable



