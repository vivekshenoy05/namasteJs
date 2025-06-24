// function x(){
//     var a = 7;
//     function y(){
//         console.log(a)
//     }
//     y();
// }
// x();

// setTimeout(()=>console.log('timer'),5000);
// const x = (y)=>{
//     console.log('xxxxxxxxxxxxxx');
//     y();
// }
//  x(()=>console.log('yy'))


// setTimeout(function(){
//     console.log('hello')
// },2000)

// const a = function(a){
//     console.log('hello')
// }
// console.log(a)

// trust issues with JS

// console.log('Start');

// setTimeout(()=>{
//     console.log('timer done')
// },5000);

// console.log('end');


console.log('Start');

setTimeout(()=>{
    console.log('timer done')
},5000);

console.log('end');

let startDate = new Date().getTime();
let endDate = startDate;

while(endDate < startDate + 10000){
    endDate = new Date().getTime();
}

console.log('after while loop');
