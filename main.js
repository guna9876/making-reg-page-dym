console.log('person1: shows ticket');
console.log('person2: shows ticket');
const preMovie=async () => {
    const promiseWifeBriningTicks = new Promise(( resolve , reject) => {
        setTimeout(() => {
            resolve('ticket');
        },3000)
    });
        const getPopcorn = new Promise((resolve,reject)=>resolve(`popcorn`));
        const addButter= new Promise((resolve,reject)=>resolve(`butter`));
        const getColdDrinks = new Promise((resolve,reject)=>resolve(`coldDrinks`));

        let ticket = await promiseWifeBriningTicks;

            console.log('wife: i have the ${ticket}');
            console.log('husband:we shd go in')
            console.log('wife:no i m hungry');

            let popcorn=await getPopcorn;

            console.log(`husband:i got some ${popcorn}`);
            console.log('husband:we shd go in');
            console.log('wife:I need butter on my popcorn');
            let butter=await addButter;
            console.log(`husband:i got some ${butter} on popcorn`);
            let coldDrinks=await getColdDrinks;
            console.log(`wife:I need coldDrink`)
            console.log(`husband:lets get it fast`)
            console.log(`wife:thank you darling`)
            console.log(`husband:anything else darling!`);
            console.log(`wife:lets go we are getting late`);
            console.log(`husband:thank you for the reminder`);

            return ticket;
}
preMovie().then((m)=>console.log(`person3:shows ${m}`));
console.log('person4: shows ticket');
console.log('person5: shows ticket');