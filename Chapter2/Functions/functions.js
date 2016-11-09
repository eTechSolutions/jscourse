// Declerations

    //function decleration 
    function test(){}

    // function expression
    var test2 = function(){}


// Returning from a function 

    function test(){
        return "I am returned from a function"
    }

    var returnedValue = test(); // "I am returned From a function"

// Supplying parameters to functions

    function test(parameter){
        return parameter
    }

// function scope

    // cant use variables outisde of the the function when declared
    function test(){
        var name ="test"
        console.log(name) //test
    }

    console.log(name) //undefined;

    function test(name){
        console.log(name) 
    }

    test("test") //test

    console.log(name) //undefined

    //Variables declared outside of the function can be used

    var fruit = "apple"

    function getFruit(){
        console.log(fruit) //"apple"
    }