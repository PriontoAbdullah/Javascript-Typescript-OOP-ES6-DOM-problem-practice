const user = {
    id: 245,
    name: 'Abul',
    lover: {
        name: 'Jamila',
        FvtFood: 'Pizza'
    },
    friends: ['Kamal', 'Jamal', 'Salam'],
    friendsAge: [12, 45, 56]
};

const userJSON = JSON.stringify(user);
console.log(userJSON);

const userFromJSON = JSON.parse(userJSON);
console.log(userFromJSON);