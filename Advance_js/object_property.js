const students = [
    { id: 21, name: 'Dildar' },
    { id: 31, name: 'Maannaaa' },
    { id: 41, name: 'Jashim' },
    { id: 71, name: 'Deepjol' }
];

// const names = [];

// for (let v of students) {
//     names.push(v.name);
// }

// console.log(names);

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);

console.log(names);
console.log(ids);
console.log(bigger);