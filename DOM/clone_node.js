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

let newItem = list.lastElementChild.cloneNode(); // Only element clone
newItem.innerHTML = 'Five';
list.appendChild(newItem);

let deepItem = list.firstElementChild.cloneNode(true); // deeply all clone
list.appendChild(deepItem);