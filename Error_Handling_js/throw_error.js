// create a custom build error by throw error

try {
    console.log('I am Line 1');
    throw new Error('I am Your Error');
    console.log('I am Line 1');
    console.log('I am Line 1');
} catch (error) {
    console.log(error.message);
}