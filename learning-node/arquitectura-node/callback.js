const asyncCallback = function (cb) {
    setTimeout(() => {
        if (Math.random() < 50/100) {
            return cb(null, 'hello world');
        } else {
            cb(new Error('hello error'));
        }
    }, 500);
};

asyncCallback((err, msg) => {
    if (err) {
        console.log('error', err);
    } else {
        console.log('message', msg);
    }
});