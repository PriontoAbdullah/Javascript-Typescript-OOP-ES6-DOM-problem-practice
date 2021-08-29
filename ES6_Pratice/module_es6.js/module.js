import Rectangle from './Rectangle.js'; // for import default file

import * as func from './func.js'; // for all function import

import { sub, div } from './func.js'; // for something function import

let r1 = new Rectangle('Green', 4, 5);
console.log(r1);
r1.draw();

console.log(func.add(5, 5));
console.log(func.multi(5, 5));

console.log(func.sub(5, 5));