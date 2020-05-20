const myObj = {
    name: 'Kuddus Ali',
    getFullName: function() {
        console.log(this);
        return 'Mr. ' + this.name;
    }
};

const anotherObj = {
    name: 'Jodu Mia',

};

console.log(myObj.getFullName());

anotherObj.getFullName = myObj.getFullName;

console.log(anotherObj.getFullName());

function add(a, b) {
    console.log(this);
    return a + b;
}

anotherObj.sum = add;

console.log(anotherObj.sum(1, 2));