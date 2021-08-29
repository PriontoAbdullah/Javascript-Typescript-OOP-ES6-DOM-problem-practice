function brickCalculator(n){
    if(n<=10){
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