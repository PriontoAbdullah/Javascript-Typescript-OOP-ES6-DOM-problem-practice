function createElement(tagName, innerHTML, className) {
    let tag = document.createElement(tagName);
    tag.innerHTML = innerHTML || '';
    tag.className = className || '';
    return tag;
}

function append(parent, children) {
    children.forEach(child => {
        parent.appendChild(child);
    });
}

let li = createElement('li', 'One', 'list-group-item');
li.setAttribute('title', 'I am first Item');

let li2 = createElement('li', 'Two', 'list-group-item');
let li3 = createElement('li', 'Three', 'list-group-item');

let list = document.getElementById('list');

append(list, [li, li2, li3]);

let p1 = createElement('p', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut magnam a harum eius hic! Quia, eveniet voluptatibus ut consequuntur, ducimus fugiat, voluptatem amet consequatur sint accusamus obcaecati eius porro ea', 'lead');


let p2 = createElement('p', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, tempora consequuntur, ducimus fugiat, voluptatem amet consequatur sint accusamus.', 'lead');

let div = createElement('div');
append(div, [p1, p2]);

let container = document.getElementById('cont');
container.appendChild(div);

let h1 = createElement('h1', 'Create DOM', 'display-4 text-center my-5');
let main = document.getElementById('main');
append(main, [h1]);

list.insertAdjacentElement('beforebegin', main); // upper , down element show
list.insertAdjacentElement('afterend', div); // insert Adjustment Element