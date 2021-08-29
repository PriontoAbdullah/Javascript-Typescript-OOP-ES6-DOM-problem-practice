function stopWatch() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());

console.log(clock1());
console.log(clock1());

console.log(clock2());

// closer = kono ekta function tekhe jodi onno kno ekta function k call kori othoba return kori tahole
// sehe ekta closed environment toiri kore fele, vitorer function ta jake call or return kora hocche
// sehe jodi tar bahirer variable ta k access korte pare (lexical scope), tokhon sei take jokhon use kora hy
// tokhon sei function ta nijera external reference rekhe dey & bahir tekhe sei function er scope use kora jay that's call closer