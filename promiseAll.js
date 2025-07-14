// Promise.all()

const p1 = new Promise((resolve,reject) =>{
    setTimeout(() =>resolve('P1 resolved'),3000)
});

// failed scenario
// const p1 = new Promise((resolve,reject) =>{
//     setTimeout(() =>reject('P1 failed'),3000)
// });


const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('P2 resolved'),1000)
});

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('P3 resolved'),2000)
});

Promise.all([p1,p2,p3]).then((res)=>console.log(res)).catch((err)=>console.error(err))

// output
// ['P1 resolved', 'P2 resolved', 'P3 resolved']