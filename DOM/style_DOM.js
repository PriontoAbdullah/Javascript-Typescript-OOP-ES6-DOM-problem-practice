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

main.style.color = 'orange';
main.style.fontSize = '30px';
main.style.background = 'black';
main.style.borderRadius = '25px';


let styleObj = {
    background: 'black',
    fontSize: '20px',
    color: 'rgb(0,225,0)',
    border: '2px solid white',
    borderRadius: '25px'
};

let item = document.getElementById('list');

[...item.children].forEach(li => {
    Object.assign(li.style, styleObj);
});