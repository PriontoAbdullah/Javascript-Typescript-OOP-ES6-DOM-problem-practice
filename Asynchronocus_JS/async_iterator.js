let asyncIterable = {
    [Symbol.asyncIterator]() {
        let i = 0;
        return {
            next() {
                if (i < 5) {
                    return Promise.resolve({
                        value: i++,
                        done: false
                    });
                } else {
                    return Promise.resolve({
                        done: true
                    });
                }
            }
        };
    }
};

let iterate = asyncIterable[Symbol.asyncIterator]();

(async function() {
    for await (let v of asyncIterable) {
        console.log(v);
    }
})();