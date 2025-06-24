// tricky map()

const users = [
    {firstName: 'Vivek', lastName: 'Shenoy', age: 25},
    {firstName: 'ram', lastName: 'Shenoy', age: 25},
    {firstName: 'roopa', lastName: 'Shenoy', age: 22},

];

// need to find list of full name of all the persons in the array
const output = users.map(x=>x.firstName + ' '+ x.lastName);
console.log(output);

// find the people with the same age {25: 2, 22: 1}
// we are using reduce method here since we want one object and that object should have different
//  unique value
// here initial value of accumulator will be object because when there is no data prsent in it there will be empty object

const output1 = users.reduce((acc,cur)=>{
    if(acc[cur.age]){
        acc[cur.age] = ++acc[cur.age]
    }else{
        acc[cur.age] = 1;
    }
    return acc;
},{});

console.log(output1);

// now we need to find first name of all the people whose age is less than 24

const output2 = users.filter(x=>x.age>24);
console.log(output2);

// output
// [0: {firstName: 'Vivek', lastName: 'Shenoy', age: 25}
// 1: {firstName: 'ram', lastName: 'Shenoy', age: 25}]

// this returns the arry with age > 24 but we need to find only firstName here chaing comes into picture
// map will be running on the result of reduce method

const output3 = users.filter(x=>x.age>24).map(x=>x.firstName);
console.log(output3);

// find the same using reduce

const output4 = users.reduce((acc,cur)=>{
  cur.age>24 ? acc.push(cur.firstName): '';
  return acc;
},[]);

console.log(output4)


