const Base_URL = 'https://jsonplaceholder.typicode.com';

fetch(`${Base_URL}/users/1`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return Promise.resolve('Something');
    })
    .then(str => {
        console.log(str);
        return Promise.resolve('Another Promise');
    })
    .then(another => {
        console.log(another);
    })
    .catch(error => {
        console.log(error);
    });


// Custom Build Get request Promise API

function getRequest(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('get', url);

        xhr.onreadystatechange = function(event) {
            if (xhr.readyState == 4) { // 4 == ready
                if (xhr.status == 200) { // 200 == all ok
                    let response = JSON.parse(xhr.response);
                    resolve(response);

                } else {
                    reject(new Error('Error Occurred'));
                }
            }
        };

        xhr.send();
    });
}

getRequest(`${Base_URL}/users/2`)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error.message);
    });