function feetToMile(n){
    return (n < 0)? 'Please enter a valid number' : n * 0.000189394;
}

var mile = feetToMile(10000);
console.log(mile);


function woodCalculator(c,t,b){
    return (c < 0 || t < 0 || b < 0)? 'Please enter a valid number' : c*1 + t*3 + b*5;
}

var totalWood = woodCalculator(6,1,2);
console.log(totalWood);


function brickCalculator(n){
    if( n < 0) {
        return 'Please enter a valid number';
    }
    else if(n<=10){
        return n * 15000;
    }
    else if(n<=20){
        return (n-10)*12000 + (10*15000);
    }
    else {
        return (n-20)*10000 + (10*12000) + (10*15000);
    }
}

var buildingFloor = brickCalculator(17);
console.log(buildingFloor);


function tinyFriend(name){
    if(name.length == 0){
        return 'Please enter a valid name array';
    }
    else {
    var tinny = name[0];
    for(i=1; i < name.length; i++){
        if(tinny.length > name[i].length){
            tinny = name[i];
        }
    }
    return tinny;
}
}


var friendsName = tinyFriend(['Abul', 'Kodu', 'Mofiz', 'Jodu', 'Opkul', 'Ali', 'Sopkulah']);
console.log(friendsName);