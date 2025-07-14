// Promise.race()

const p1 = new Promise((resolve,reject) =>{
    setTimeout(() =>resolve('P1 resolved'),3000)
});


const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('P2 resolved'),5000)
});

const p3 = new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve('P3 resolved'),2000)
    setTimeout(() =>reject('P3 failed'),1000)

});

Promise.race([p1,p2,p3]).then((res)=>console.log(res)).catch((err)=>console.error(err))

// output
// P1 failed

// lingo in promises

// once u say promise is settled means u got the result
// once the promise iss settle it can either be resolve(success,fulfilled) or reject(failure,rejected)
// settle can be failure or success
