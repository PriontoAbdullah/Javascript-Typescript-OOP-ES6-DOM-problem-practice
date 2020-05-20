// finally block always do work at the last block

const makeText = text => {
    try {
        let str = text.trim();
        let words = str.split(' ');

        return words;

    } catch (error) {
        // console.log(error.message);
        console.log('Please Provide a Valid Text');

    } finally {
        console.log('I am Finally block');
    }
};

// let words = makeText('I am a boy');
let words = makeText(71);
console.log(words);