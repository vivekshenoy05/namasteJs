// promise apis

// 1. Promise.all()
// used to make parallel api calls and get the results
//  for eg you want to make 10 api calls to get get user info
// it is used to handle multiple api calls together

// it takes array of promises as input
// eg 
Promise.all([p1,p2,p3]);
// this will make 3 parallel api calls and get the result
// suppose p1 takes 3sec, p2 takes 1s and p3 takes 2 sec to resolve and all 3 promises are success
// Promise.all()--> it will collect all results in array and give it back
// promise.all returns the array with result of all promises
// [val1,val2,val3] val1 is result of p1, val2 is result of p2 and val3 is result of p3

// how much time will it take?
// after 3 sec it will give the result
// why 3 sec --> promise.all will make all 3 aopi calls in parallel and it will wait for all of them to finish
// it will collect the result and give the result as an array

// what if any off this promises fail or rejected??
// in this case promise.all() works differently

Promise.all([p1,p2,p3]);

// pl takes 3 sec, p2 takes 1 sec and p3 takes 2 sec
//  now suppose p2 is rejected
// as soon as any of this promises get rejected Promise.all() will throw an error
// Promise.all() will also be an failure
// what ever the error we get from rejected promise it will throw the same error
// output will be error (returned by p2)
// here p2 took 1 sec so after 1 sec so after 1 sec u will see error
// it will not even wait for other promises to get success

// now what if p1, p2 is success and p3 fails
// after 2 sec promises will be rejected


// what if i want result from successfull promises if one of the promises fails its ok
// i want results from other api calls
// then we can use Promise.allSettled()

Promise.allSettled([p1,p2,p3]);
// pl takes 3 sec, p2 takes 1 sec and p3 takes 2 sec
// we will get result in array after 3 sec [val1,val2,val3] same as that of Promise.all()
// this will be different in case of failure\

// what if one of the promises get rejected?
// if p2 gets rejected at 1 sec
// Promise.allSettled() still waits for all the promises to get settle
// it will take 3 sec to get al the promises settle irrespection of success or failure
// it will give you all the results
// [val1,err2,val3]
// output will be the array of the same number of promises you passed in


// Promise.race()
Promise.race([p1,p2,p3]);
// pl takes 3 sec, p2 takes 1 sec and p3 takes 2 sec
// as soon as which promises resolves first it gives me the result
// here p2 resolves in 1 sec so we get val2 in res
// here output is not an array
// val2 it will give the value of the second promise
// this promise gives the value of first settled promise

// what if after p2 fails after 1 sec
// in this case error will be thrown
// itbwill retuen error from p2
// it will not wait for other promises to get setttle

// Promise.any()
Promise.any([p1,p2,p3]);
// it issimilar to Promise.race()
// it will wait for first promise to get successful
// wait for first success
// pl takes 3 sec, p2 takes 1 sec and p3 takes 2 sec
// suppose if p2 is successfull it returns val2
// seesking for first success

// what if p2 after 1 sec gets rejected?
// now nothing will happen after 1 sec

// Promise.any will wait for the success
// suppose after 2 sec p3 got success we get val3 in response

// what if all promises fail?
// the returned result will be an aggregated error
// and this aggregae error will be an array with error of all 3 errors
// [err1,err2,err3]

