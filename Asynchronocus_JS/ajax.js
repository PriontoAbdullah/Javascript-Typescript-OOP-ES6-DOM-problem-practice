// AJAX = Asynchronous Javascript And XML (JSON) - JSON = JavaScript Object Notation

const xhr = new XMLHttpRequest();
xhr.open('get', 'https://jsonplaceholder.typicode.com/users');

xhr.onreadystatechange = function(event) {
    if (xhr.readyState == 4) { // 4 == ready
        if (xhr.status == 200) { // 200 == all ok
            let users = JSON.parse(xhr.response);
            console.log(users);
            users.forEach(element => alert(element.name));

        } else {
            console.log(xhr.status);
        }
    }
};

xhr.send();