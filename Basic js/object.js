var student = {
    id: 121,
    phone: 1312,
    name: "jodu"
};

console.log(student);
var num = student.phone;
console.log(num);

student.name = "Modu"; // Dot Notation
var nam = student['name']; // Array Notation
console.log(nam);

var phn = 'phone';
student[phn] = 0170;
console.log(student);

delete student.name; // remove a property from Object
console.log(student);
// Object iteration
for (var i in student) {
    console.log(i + ' : ' + student[i]);
}

console.log(Object.keys(student)); // for all keys in array
console.log(Object.values(student)); // for all values in arrays
console.log(Object.entries(student)); // for all property in array

var obj = Object.assign({}, student); // clone an object from exist object

obj.id = 173;
console.log(obj);