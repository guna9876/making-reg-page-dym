console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie=async () => {
    const promiseWifeBriningTicks = new Promise(( resolve , reject) => {
        setTimeout(() => {
            reject('ticket');
        },3000)
    });
        let ticket
        try{
              ticket = await promiseWifeBriningTicks;
        }catch(e){
            ticket='sad face';
        }

       const getPopcorn = new Promise((resolve,reject)=>resolve(`popcorn`));
        const getCandy = new Promise((resolve,reject)=>resolve(`candy`));
        const getColdDrinks = new Promise((resolve,reject)=>resolve(`coldDrinks`));

        let ticket = await promiseWifeBriningTicks;

        let [popcorn,candy,coldDrink] = await Promise.all([getPopcorn,getCandy,getColdDrinks]);

        console.log(`${popcorn},${candy},${coldDrink}`)
        return ticket;
}
preMovie().then((m)=>console.log(`person3:shows ${m}`));
console.log('person4: shows ticket');
console.log('person5: shows ticket');