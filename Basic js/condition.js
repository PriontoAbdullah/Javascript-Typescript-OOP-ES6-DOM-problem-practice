var job = true;
var savingAmmount = 50000;

if (job == true && savingAmmount > 200000) {
    console.log("Aso tomar patri khuji");
} else if (job == true) {
    console.log("Accha koi din pore dekhbo");
} else {
    console.log("Tor kopale biya nai");
}

var date = new Date();
var today = date.getDay();

switch (today) {
    case 0:
        console.log("Sunday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    default:
        console.log("Not a valid Number");
        break;
}

var n = 7;

var result = n % 2 == 0 ? 'Even' : 'Odd';
console.log(result);

var name = '';

var fullName = name || 'Prionto';
console.log(fullName);

var isOk = true;

isOk && console.log("Everything is OK");