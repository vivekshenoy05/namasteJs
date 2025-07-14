// Promise.allSettled()

const p1 = new Promise((resolve,reject) =>{
    setTimeout(() =>resolve('P1 resolved'),3000)
});


const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('P2 resolved'),1000)
});

const p3 = new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve('P3 resolved'),2000)
    setTimeout(() =>reject('P1 failed'),3000)

});

Promise.allSettled([p1,p2,p3]).then((res)=>console.log(res)).catch((err)=>console.error(err))

// output
// (3) [{…}, {…}, {…}]
// 0: {status: 'fulfilled', value: 'P1 resolved'}status: "fulfilled"value: "P1 resolved"[[Prototype]]: Object1: {status: 'fulfilled', value: 'P2 resolved'}2: {status: 'rejected', reason: 'P1 failed'}length: 3[[Prototype]]: Array(0)

// Promise.allSettle is the only good option since it waits for all the promises to complete
// it will give array of objects with status and value
// if it fails then it will give status and reson

