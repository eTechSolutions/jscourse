// Objects

// Object Literal
var object = {
    firstName: "foo",
    lastName: "bar"
};

//Object constructor
var object2 = new Object()

object2.firstName = "foo";
object2.lastName = "bar";

// constructor function 

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

// you create this object by using the new keyword. This is Because of the Person function using the this keyword
var testPerson = new Person("test", "person");

testPerson.firstName // "test"



//Objects can contain javascript first class object.
var object3 = {
    name:"testName",
    getName: function handleGetName(){
        console.log("testName");
    },
    nicknames:["testy", "testmeister"],
    age: 24
}

// can also access propeties through nracket notation

object3['name'] // "testname"
object3['age'] // 24





