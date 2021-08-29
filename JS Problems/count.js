var speech = "Hello World. Welcome to the Javascript."
var count = 0;

for (var i = 0; i < speech.length; i++) {
    if (speech[i] == " ") {
        count++;
    }
}
count++;
console.log(count);