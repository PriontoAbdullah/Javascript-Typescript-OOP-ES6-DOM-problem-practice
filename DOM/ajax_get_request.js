let postForm = document.getElementById('post-form');
let posts = document.getElementById('get');

const URLS = 'https://jsonplaceholder.typicode.com/posts';

postForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // console.log(this.title);
    // console.log(this.body);

    let title = this.title.value || undefined;
    let body = this.body.value || undefined;

    if (title && body) {
        let postObj = {
            userID: 100,
            title,
            body
        };

        fetch(URLS, {
                method: 'POST',
                headers: {
                    'content-type': 'Application/JSON'
                },
                body: JSON.stringify(postObj)
            })
            .then(res => res.json())
            .then(post => {
                // console.log(data);
                let item = postItemGenerator(post);
                posts.appendChild(item);
                this.reset();
            })
            .catch(e => console.log(e.message));

    } else {
        alert('Please Provide Every Details');
    }
});

function postItemGenerator(item) {
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `${item.id}. ${item.title} By User ID - ${item.userID}`;

    return li;
}

// Same way as Update, Delete method