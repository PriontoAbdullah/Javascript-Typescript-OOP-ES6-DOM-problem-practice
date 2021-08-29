function func() {
    console.log(this);
    console.log(this.a + this.b);
}

func.call({ a: 10, b: 5 });
func.call({ a: 10, b: 20 });

func.apply({ a: 1, b: 2 });

function myFunc(c, d) {
    console.log(this);
    console.log(this.a + this.b + c + d);
}

// Deference between call & apply method
myFunc.call({ a: 5, b: 7 }, 10, 5); // call method
myFunc.apply({ a: 5, b: 5 }, [10, 5]); // apply method

var testBind = myFunc.bind({ a: 5, b: 7 }); // bind method
testBind(1, 2); // c, d arguments
testBind(5, 5);