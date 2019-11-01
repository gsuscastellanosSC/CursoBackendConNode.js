const promiseFunction = () => new Promise((resolve, reject)=>{
    setTimeout(() => {
        if (Math.random() < 50/100) {
            resolve ('hello world');
        } else {
            reject(new Error('hello error'));
        }
    }, 500);
});

async function asyncAwait(){
    try {
        const msg = await promiseFunction();
        console.log('message', msg);
    } catch (error) {
        console.log('error', err);        
    }
}

asyncAwait();