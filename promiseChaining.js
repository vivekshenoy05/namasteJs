// now will see promise chaining
// suppose there was proceedToPayment
// once we get the orderId we will then call proceedToPayment

const cart = ['apple', 'mango', 'pant'];

createOrder(cart)
.then(function(orderId){
    // return proceedToPayment(orderId);
    console.log(orderId);
    return orderId;
})
.then(function(orderId){
    return proceedToPayment(orderId); //returns promise
})
.then(function(paymentInfo){
    console.log(paymentInfo)
})
.catch(function(error){
    console.log(error.message)
})

function validateCart(){
    return true
}

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

function proceedToPayment(orderId){
    return new Promise((resolve, reject) => {
        resolve(`Payment successful' ${orderId}`)
    })
}

// common issue faced
// whenever we are chaining things we need to keep returning things
// whatever we return will pass down the chain
// we can return any data or promise
// when ever there is the big promise chain and if there is any error in the chain
// the catch() in the end will handle any type of error

//suppose cart is not valid, but and we want to go to proceed to payment
// for eg there are 50 .then chain and code failed in line no 15 we want to handle them
// in current scenario if any of the chain fails everything will be failed but we want to procced to next method
// now we will move the catch to above
// so it will be responsible for error occuring at top of the chain

createOrder(cart)
.then(function(orderId){
    // return proceedToPayment(orderId);
    console.log(orderId);
    return orderId;
})
.catch(function(error){
    console.log(error.message)
})
.then(function(orderId){
    return proceedToPayment(orderId); //returns promise
})
.then(function(paymentInfo){
    console.log(paymentInfo)
})


function validateCart(){
    return false
}

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

function proceedToPayment(orderId){
    return new Promise((resolve, reject) => {
        resolve(`Payment successful' ${orderId}`)
    })
}

// output
// cart is not valid
// Payment successful' undefined

createOrder(cart)
.then(function(orderId){
    // return proceedToPayment(orderId);
    console.log(orderId);
    return orderId;
})
.catch(function(error){
    console.log(error.message)
})
.then(function(orderId){
    return proceedToPayment(orderId); //returns promise
})
.catch(function(error){
    console.log(error.message)
})
.then(function(paymentInfo){
    console.log(paymentInfo);
    console.log('no matter what happens, i will be definately called')
})


function validateCart(){
    return false
}

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

function proceedToPayment(orderId){
    return new Promise((resolve, reject) => {
        resolve(`Payment successful' ${orderId}`)
    })
}

// in above code
// function(paymentInfo) will be called no matter if any of the above then() chain fails

// homework
// handle async operations using promises
// createOrder
// proceedToPayment
// showOrderSummary
// updateWallet

