
const promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        if (Math.random() < 50/100) {
            resolve ('hello world');
        } else {
            reject(new Error('hello error'));
        }
    }, 500);
});

promise
    .then(msg => msg.toUpperCase())
    .then(msg => console.log('message', msg))
    .catch(err => console.log('error',err));