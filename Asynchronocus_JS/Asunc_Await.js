// async function return = Promise

async function test() {
    return 'Test';
}

test().then(v => console.log(v));


let p1 = new Promise(resolve => {
    setTimeout(resolve, 3000, 'Test Value');
});

async function myAsyncFunction() {
    let v = await p1;
    alert(v);
}

myAsyncFunction();


//////////////////////////
async function fecthData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');

        let data = await response.json();

        let names = data.map(u => u.name);
        console.log(names);

    } catch (error) {
        console.log(error.message);
    }
}

fecthData();


////////////////////////////
let promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

async function promiseAll() {
    let result = await Promise.all(promises);
    console.log(result);
}

promiseAll();