var x = 7;

function hello (){
    console.log('Namaste JS');
}
hello();
console.log(x)

// here output will be:- Namaste JS
// 7

// check second example
hello1();
console.log(x1)

var x1 = 7;

function hello1 (){
    console.log('Namaste JS');
}

// here output will be :- 
//  Namaste JS
//  undefined

// ------------------------------------
//  now will remove the var x2 = 7;

hello2();
console.log(x2)


function hello2 (){
    console.log('Namaste JS');
}

// we get:-
//  Namaste JS
//  ReferenceError: x2 is not defined

// undefined and not defined are not same


hello1();
console.log(x1)
console.log(hello1)


var x1 = 7;

function hello1 (){
    console.log('Namaste JS');
}


// when we console.log the function we will get function itself

// in arrow function and name declared fuction it acts as variable it wont copy exact function 

hello1();
test();
console.log(x1)
console.log(hello1)

var x1 = 7;

function hello1 (){
    console.log('Namaste JS');
}

// var test = () =>{
//     console.log('test')
// }

var test = function() {
    console.log('hehe')
}