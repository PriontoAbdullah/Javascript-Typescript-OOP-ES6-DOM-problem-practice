// Coding Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

// GOOD LUCK 😀

// Solutions

function checkBMI(width, height) {
  let bmi = width / (height * height);
  return bmi;
}

const Marks_weight = 78;
const Marks_height = 1.69;

const John_weight = 92;
const John_height = 1.95;

const Marks_BMI = checkBMI(Marks_weight, Marks_height);
const John_BMI = checkBMI(John_weight, John_height);

const markHigherBMI = Marks_BMI > John_BMI;

console.log(Marks_BMI, John_BMI, markHigherBMI);
