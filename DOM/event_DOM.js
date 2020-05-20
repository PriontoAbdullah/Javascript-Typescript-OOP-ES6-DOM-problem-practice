function createElement(tagName, idName, innerHTML, className) {
    let tag = document.createElement(tagName);
    tag.id = idName || '';
    tag.innerHTML = innerHTML || '';
    tag.className = className || '';
    return tag;
}

function append(parent, children) {
    children.forEach(child => {
        parent.appendChild(child);
    });
}

let li1 = createElement('li', 'One', 'One', 'list-group-item');
let li2 = createElement('li', 'Two', 'Two', 'list-group-item');
let li3 = createElement('li', 'Three', 'Three', 'list-group-item');

append(list, [li1, li2, li3]);

let h1 = createElement('h1', '', 'Style DOM', 'display-4 text-center my-5 py-2');
let main = document.getElementById('main');
append(main, [h1]);

list.insertAdjacentElement('beforebegin', main);

let btnClick = createElement('button', 'btn', 'Add Me', 'btn btn-primary');
let button = document.getElementById('cont');
append(button, [btnClick]);

// event handler

const btn = document.getElementById('btn');

btn.addEventListener('click', function(event) {
    let item = list.lastElementChild.cloneNode(true);
    item.innerHTML = 'New Item';
    list.appendChild(item);
});