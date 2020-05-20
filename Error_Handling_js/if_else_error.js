// if else is a basic error handling
// when JS doesn't provide any error, but provide any kind of result like NaN, undefined, infinity 
// then we can use if else error handling

const changeToInt = v => {
    let result = Number.parseInt(v);

    if (!result) {
        return 'Please provide a value which is able to convert in Integer';
    }

    return result;
};

let result = changeToInt('hauMaukhau');
console.log(result);