// const myName: string = 'John';

let id: number | string = 123;
id = '123';

type stringOrNumber = string | number;
let myName: stringOrNumber = 'John';

interface Person {
  name: string;
  age: number;
  isMarried?: boolean;
}

let person1: Person = {
  name: 'John',
  age: 30,
  isMarried: false,
};

let person2: Person = {
  name: 'Jane',
  age: 25,
};

const roll: (number | string)[] = [1, '2', 3, '4', 5, '6', 7, '0'];

const persons: Person[] = [
  {
    name: 'John',
    age: 30,
    isMarried: false,
  },
  {
    name: 'Jane',
    age: 25,
  },
];

const greetings = (name: string): string => {
  return `Hello ${name}`;
};

greetings('John');

type direction = 'left' | 'right' | 'up' | 'down';

let gameDirection: direction = 'left';

// generics
const getArray = <T>(items: T[]): T[] => {
  return new Array().concat(items);
};

let myNumArr = getArray<number>([100, 200, 300]);
const myRolls = getArray<string>(['1', '2', '3', '4', '5', '6', '7', '0']);

// enum
enum Week {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 7,
}
console.log(`Week ${Week.Monday}`);

// tuple
let myTuple: [string, number, boolean] = ['John', 30, true];
