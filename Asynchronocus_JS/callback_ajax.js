function getRequest(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('get', url);

    xhr.onreadystatechange = function(event) {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                let response = JSON.parse(xhr.response);
                callback(null, response); // null = 1st argument = Error Handle, 2nd arg = response

            } else {
                callback(xhr.status, null); //xhr.status = Error, 2nd argument = null 
            }
        }
    };

    xhr.send();
}

getRequest('https://jsonplaceholder.typicode.com/users', (error, response) => {
    if (error) {
        console.log(error);
    } else {
        console.log(response);

        response.forEach(element => alert(element.name));
    }
});


getRequest('https://jsonplaceholder.typicode.com/posts', (error, response) => {
    if (error) {
        console.log(error);
    } else {
        // console.log(response);
        response.forEach(element => {
            console.log(element.title);
        });
    }
});