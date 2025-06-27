// Js executes the program line by line but in case if you want to execute randomly 
// we can acheive this by using callback function and pasing this function to setTimeout
// asynchronous program in js exists because callback exists

console.log('hello');
console.log('JS');
console.log('world');

// suppose you want to execute world at last 

console.log('hello');
function hi(){
 console.log('JS');
}

setTimeout(hi,10000);

console.log('world');

// output
// hello  world js
// using callback its a powerful way to do asynchronous operations in js

// will take eg of ecommerce website
// in ecommerce as we all know we will create order first and then we will process tio payment
// first createOrder() api will be called and then proceedToPayment()
// there is dependency between them and this is async operation
// here callback comes into picture and callback helps us to write the code

// a very common pattern which we follow in programming
// we will wrap the proceedToPayment api inside callback function
// this callback function is passed as parameter to createOrder api\
// now its the job of createOrder api to create the order and then call proceedToPayment method

const cart = ['apple', 'mango', 'pant'];

api.createOrder(cart, function(){
    api.proceedToPayment()
});

// now if the payment is successful we need to show the order summary page
// and for this we have api called as showOrderSummary() and this needs to called only after payment is successful
// in this case we will have callback function and then we will pass this as parameter to proceedToPayment()
// now its the job of proceed to payment api to complete the payment and call the showOrderSummary() function

api.createOrder(cart, function(){
    api.proceedToPayment(function(){
        api.showOrderSummary()
    })
});

//  now will see the problems that we might face
// now we have created the order, payment, show order summary
// now we need to update the wallet
// in this case also we need to again we need to pass callback function to showOrderSummarty()

api.createOrder(cart, function(){
    api.proceedToPayment(function(){
        api.showOrderSummary(function(){
            api.updateWallet()
        })
    })
});

// so when we have large no of apis or code base this chaining keeps on increasing
// if apis are dependent on each other we end up falling in callBack hell
// our code starts to grow horizontally instead of vertically
// this type of code is unmaintainable and unreadable
// this horizontal structure is also known as pyramid of doom


// now will see inversion of control
// inversion of control is another problem we see using callbck
// inversion of control means you loose the control of your code when we are using callbacks

api.createOrder(cart, function(){
    api.proceedToPayment()
});

// in the above code we take the callback function and give it to createOrder api
// now we are blindly trusting the createOrder api
// we are assuming that createOrder api will create the order and then call proceedToPayment isn't it risky?
// we gave the control of the program to createOrder api, there might be many bugs inside createOrder api
// what is our callback function is never called
// what if our callback function is called twice?
