// Promise = Handle Asynchronous Task
// Promise is a constructor function, which argument has a callback function
// Inside callback function has two callback function named resolve & reject

let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'One');
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Two');
});

// console.log(p1);
p1.then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });

p2.then((value) => {
    console.log(value);
});


// New real promise

function getIphone(isPassed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isPassed) {
                resolve('I have Got an I Phone');
            } else {
                reject(new Error('You have Failed'));
            }
        }, 2000);
    });
}

getIphone(true)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error.message);
    });