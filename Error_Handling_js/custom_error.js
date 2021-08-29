class CustomError extends Error {
    constructor(msg) {
        super(msg);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError);
        }
    }
}

try {
    console.log('I am Line 1');
    throw new CustomError('I am Your Error');

} catch (error) {
    console.log(error);
    console.log('This is a custom Error Message');
}