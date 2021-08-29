const num = [0, 1, 2, 3, 4, 5];

const part = num.slice(1, 3); // slice(start index, end index er porer ta) // kete neya
console.log(part);
console.log(num); // main array poriborton kore na

const remove = num.splice(1, 3, 71); //splice(start index, delete count, add number) remove kore & replace kore
console.log(remove);
console.log(num); // main array poriborton kore fele

const together = num.join(' % '); // protita element er shate join kore dey
console.log(together);