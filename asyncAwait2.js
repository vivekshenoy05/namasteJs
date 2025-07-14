//difference normally handling promises and using async await

//let us resolve promise after sometime

const p = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve('Promise is resolved')
    }, 10000)
});


async function handlePromise(){
    const res = await p;
    console.log(res);
}

handlePromise();

// let us use older way of handling promises

// what will be printed first Hello Vivek or promise resolved value

function getData(){
    //js engine will not wait promise to be resolved it will just move on to the next line and prints Hello vivek
    // and this promise will be resolved after 10 seconds and once it is resolved it will do console.log(res) i.e resolved value
    p.then((res)=>console.log(res));
    console.log('Hello vivek')
}

getData();

// outpur
// Hello vivek
// Promise is resolved (after 10 sec)

//the problem with this approach was it was bit confusing for lot of developers
// developers used to this that JS used to wait
// or program will wait on line no 27
// they used to think this console.log would happen only after 10 sec

// now will see what happen with async await

async function handlePromise(){
    //js engine was waiting for promise to get resolve
    console.log('HELLO WORLD')
    const res = await p;
    console.log('Hello Vivek')
    console.log(res);
}

handlePromise();
// output
// HELLO WORLD
// Hello Vivek
//  Promise is resolved
// in async aswait case code was waiting at line no 44 to get promise resolve
// JS engine waits for promise to be resolved. and once promise is resolved it moves to next line

async function handlePromise(){
    //js engine was waiting for promise to get resolve
    console.log('HELLO WORLD')
    const res = await p;
    console.log('Hello Vivek')
    console.log(res);

    console.log('HELLO WORLD')
    const res1 = await p;
    console.log('Hello Vivek')
    console.log(res1);
}

handlePromise();

// will our program now wait 2 time or will it run parallely?
// first HELLO WORLLD is printed
// and program waitss for 10 sec and then it prints Hello Vivek
// both the promises are resolved

// output
// HELLO WORLD
//  Hello Vivek
//  Promise is resolved
//  HELLO WORLD
//  Hello Vivek
//  Promise is resolved

// what we thought is after 10 sec one promise is resolved and after 20 sec other one is resolved
// it did not work like that

// now let us create a 2 different promises

let p1 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('p2 is resolved')
    },5000)
});

async function handlePromise(){
    //js engine was waiting for promise to get resolve
    console.log('HELLO WORLD')
    const res = await p; //10 sec
    console.log('Hello Vivek')
    console.log(res);

    console.log('HELLO WORLD1')
    const res1 = await p1; //5 sec
    console.log('Hello Vivek1')
    console.log(res1);
}

handlePromise();

// time is different for both promises
// Hello Vivek1 will be printed first? what will ahppen

// promise p1 was resolved in 5 sseconds but it waited till promises p is resolved
// promise p1 waited for 10 sec to resolve
// output
// HELLO WORLD
//  Hello Vivek
//  Promise is resolved
//  HELLO WORLD1
//  Hello Vivek1
//  p2 is resolved


// now we will reverse the order
//  i will make p1 promise 5 sec and p2 promise 10 sec

const p3 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve('Promise is resolved')
    }, 5000)
});

const p4 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve('Promise is resolved1')
    }, 10000)
});

async function handlePromise(){
    //js engine was waiting for promise to get resolve
    console.log('HELLO WORLD')
    const res = await p3; //10 sec
    console.log('Hello Vivek')
    console.log(res);

    console.log('HELLO WORLD1')
    const res1 = await p4; //5 sec
    console.log('Hello Vivek1')
    console.log(res1);
}

handlePromise();

// now 
// HELLO WORLD       // wwill print immediately
//  Hello Vivek      // will print after 5 sec
//  Promise is resolved  // will print after 5 sec
//  HELLO WORLD1      // will print after 10 sec
//  Hello Vivek1      // will print after 10 sec
//  p2 is resolved1    // will print after 10 sec

// after 5 seconds our first promise is resolved and it gets printed
// and after 10 sec promise 2 gets resolved and gets printed into console
// when we reverse the order behaviour changes completly 
// it looks like JS engine is waiting and it is not true at all

//how the above program works

// when js engine sees the HandlePromise() function entire function is moved into callstack
// when JS engine sees await i/e in line no 145 handlePromise() suspends for that time and it will wait till p1 is resolved
// when p1 is resolved then and only it will move ahead

// once p1 is resolved and curently callstack is empty handlePromise() again pushed into call stack
// and it will execute the code from where it left

// again it will log HELLO WORLD1.
// in next line there is a promise and checks if promise is resolved or not if not handlePromise() is suspended
// mean main execution thresad is mot blocked
// once p2 is resolved handlePromise()is again comes to callstack
// and starts from the place where it left

// real world examples of async wait

// we will amke api call using fetch() function

// here we can find apis https://api.github.com/

const API_URL = `https://api.github.com/users/vivekshenoy05`


async function handlePromise(){
    try{
        const data = await fetch(API_URL);
        const jsonData = await data.json();
        console.log(jsonData);
    }catch(err){
        console.log(err)
    }
}
handlePromise()

// how fetch works


// fetch function is a  promise which when resolved returns us the response object
// and the response object has the body which is readable stream
// we need to use .json() to convert it to readable form

// this response.json() is again a promise and when this promise is resolved it gives us the result

// error handling
// we will use try catch to handle errors

// another method is we can use .catch()
// old way
handlePromise().catch(err => console.log(err))

