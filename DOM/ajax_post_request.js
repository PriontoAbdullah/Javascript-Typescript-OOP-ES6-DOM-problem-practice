let load = document.getElementById('load');
let postList = document.getElementById('posts');

const URL = 'https://jsonplaceholder.typicode.com/posts';

load.addEventListener('click', function() {
    fetch(URL)
        .then(res => res.json())
        .then(posts => {
            // console.log(data);
            posts.forEach((post, index) => {
                let listItem = listItemGenerator(post, index + 1);
                // console.log(listItem);
                postList.appendChild(listItem);
            });
        })
        .catch(e => console.log(e.message));
});

function listItemGenerator(item, num) {
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `${num}. ${item.title}`;

    return li;
}