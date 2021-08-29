const array = [3, 2, 3, 4, 5, 6, 8, 9, 5, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 4, 0, 8, 4, 2, 1];

const uniqueArray = [...new Set(array)];

console.log(uniqueArray);
