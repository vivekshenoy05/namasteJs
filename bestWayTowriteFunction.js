// calculate area, diameter and circumference of the circle

// not an correct way

// const radius = [1,3,2,4];

// area of the circle

// const calculateArea  =  function (radius){
//     const output = [];
//     for(let i =0; i<radius.length; i++){
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// };


// const calculateDiameter  =  function (radius){
//     const output = [];
//     for(let i =0; i<radius.length; i++){
//         output.push(2* radius[i]);
//     }
//     return output;
// };

// const calculateCircumference  =  function (radius){
//     const output = [];
//     for(let i =0; i<radius.length; i++){
//         output.push(2 * Math.PI * radius[i]);
//     }
//     return output;
// };

// console.log(calculateArea(radius));
// console.log(calculateDiameter(radius));
// console.log(calculateCircumference(radius));


// better way

const radius = [1,3,2,4];

const area = function (radius) {
    return Math.PI * radius * radius;
};

const diameter = function (radius) {
    return 2 * radius;
};

const circumference = function (radius) {
    return 2 * Math.PI * radius;
};

// main logic

const calculate = function (radius, logic) {
    let output = [];
    for (let i = 0; i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius,area));
console.log(calculate(radius,diameter));
console.log(calculate(radius,circumference));



// we can even use map function here

console.log(radius.map(area));
console.log(radius.map(diameter));
console.log(radius.map(circumference));


// now using prototype function

 Array.prototype.calculate = function (logic) {
    let output = [];
    for (let i = 0; i<this.length;i++){
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.calculate(area));