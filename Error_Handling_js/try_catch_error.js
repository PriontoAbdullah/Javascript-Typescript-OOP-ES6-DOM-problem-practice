// try catch error
// when JS provide any error message then we can use try catch block

const makeText = text => {
    try {
        let str = text.trim();
        let words = str.split(' ');

        return words;

    } catch (error) {
        // console.log(error.message);
        console.log('Please Provide a Valid Text');
    }
};

// let words = makeText('I am a boy');
let words = makeText(71);
console.log(words);