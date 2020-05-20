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
let li4 = createElement('li', 'Four', 'Four', 'list-group-item');

append(list, [li1, li2, li3, li4]);

let firstChild = list.firstElementChild;
let two = document.getElementById('Two');

setTimeout(() => {
    firstChild.innerHTML = firstChild.innerHTML + ' ( Modified )';
    firstChild.style.background = 'orange'; // change style
}, 3000);

setTimeout(() => {
    two.innerHTML = two.innerHTML + ' ( Modified )';
    two.classList.add('text-primary'); // add another class
}, 4000);

// for remove element
setTimeout(() => {
    list.lastChild.remove();
}, 5000);

// we also update any event