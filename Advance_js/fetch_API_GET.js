fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => displayUser(json))
    .catch(error => console.group(error));

function displayUser(users) {
    const userNames = users.map(user => user.username);
    const ul = document.getElementById("users-container");

    for (let i = 0; i < users.length; i++) {
        const userName = userNames[i];
        const li = document.createElement("li");
        li.innerText = userName;
        ul.appendChild(li);
    }
}

// XHR = XML HTTP Request 
// What & all method is HTTP request?
// V.V.I for Interview Get Vs Post
// What is Promise?

// xml Ajax Jquery - Old technology