console.log('person1:shows ticket');
console.log('person2:shows ticket');

const promiseWifeBriningTicks = new Promise(( resolve , reject) => {
    setTimeout(() => {
        resolve('ticket');
    },3000)
});
  const getPopcorn=promiseWifeBriningTicks.then((t)=>{
    console.log('wife: i have the tics');
    console.log('husband:we shd go in')
    console.log('wife:no i m hungry');
    return new Promise((resolve, reject) => resolve(`${t} popcorn`)); 
});
    const getButter=getPopcorn.then((t)=>{
        console.log('husband:i got some popcorn');
        console.log('husband:we shd go in');
        console.log('wife:I need butter on my popcorn');
    return new Promise((resolve, reject) => resolve(`${t} butter`) ); 
});
getButter.then((t)=>console.log(`t`))

console.log('person4:shows ticket');
console.log('person5:shows ticket');