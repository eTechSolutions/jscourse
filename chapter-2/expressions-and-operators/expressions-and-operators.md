# Expressions And Operators
JavaScript has a a wide range of operators which can be binary and unary, in this section we will look at:

* Assignment
* Comparison
* Logical
* Conditional
* typeof

This section will only look a small selection of these, for a bigger list [Click here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

## Binary
a binary operator requires 2 operands, 1 before and 1 after.

```Javascript
operand1 operator operand2

// example
3 * 4
x + y
```

## Unary

a unary operator requires a single operand, either before or after the operator

```Javascript
operator operand
//or
operand operator

//example
x++
++x
```

# Assignment
An assignment operator assigns the value to its left operand based on the value of its right operand.

```JavaScript
//Simple assignment
x = y

//addition
x += y //shorthand
x = x + y // meaning
```

# Comparison
A comparison operator compares 2 operands and returns a logical value based on whether the value is true. you can compare:
* numbers
* strings
* logical
* object values

if using `==`, JavaScript will attempt to convert the 2 operands to an appropriate type for the comparison,
which can result in unwanted results. Using `===` will stop JavaScript from attempting to convert  
both operands into the same type.

```JavaScript
1 == '1' //true

var foo = 3;
var bar = 4;

foo == "3" //true
foo != bar //true

foo === "3" //false
foo !== "3" //true

//Greater than
foo > bar //false

//Greater than or equal
foo >= 3 //true

// Less than
foo < bar //true

//Less than or equal

foo <= 3 //true

```

## undefined and null
* undefined (value has not been defined)
* null (value has been defined but has no value)
* be aware javascript is light on rules so you can assign something to undefined! :)

## truthy and falsy
```JavaScript
// As Expected
false = false
true = true

// null & undefined checks
undefined = false
null = false

// anything that exists should be true!
{} = true
'' = true
1 = true
5 = true

// have a guess
0
-1
-1 == true

// boolean comparison vs truthy evaluation
// if using an if statement, the expression will be evaluated truthy

if({}){
  // will return
}
if(''){
  // will this return?
}

// if using a logical operator "==", this will try to convert the value to true
"test" == true //what do you think this will evaluate to?

1 == true // what will this return?


```
There are reasons why this sucks and reasons why its awesome!! :D

# Logical
Logical operators are typically used with boolean values but can be used with other values.
When they are used with a boolean value, they will return a boolean, but used with a different value
it may return a non-boolean value.

```JavaScript
var foo = "string"
var boo = undefined // false values can be null, 0, NaN, empty string ("") or undefined.

// OR
// returns the left side if the left side can be evaluated to true
true || false // returns true
{} || undefined // returns {}
undefined || {} // returns {}

// Cool uses!
var obj = {}
var data = obj.data || 'default value'

// AND
// returns right value if left value is true or will return left if evaluated to false
true && true //returns true
true && false //returns false

{} && undefined // returns undefined
undefined && {} // returns {}

//Other values
// returns the 2nd operand if 1st operand is true or it will return 1st if false
foo && bar //returns undefined
bar && foo // returned undefined

//NOT
//returns true if boolean is false

//Boolean values
!true //returns false
!false // returns true

//Other values
!foo //returns false
!bar // returns true

```

# Conditional
the conditional operator is the only operator in JavaScript to take 3 operands.
the operator can have one of two values based on the condition.

```Javascript

// the syntax is:
conditon ? val1 : val2

//example

true ? "i will return" : "i will not"
false ? "i will not return" : "i will return"
```


# typeof

The typeof operator returns a string value indicating the type of the operand.

```JavaScript
var fun = function(){};
var number = 0;
var text = "test"
var person = {};
var array = [];

typeof fun //returns "function"
typeof number //returns "number"
typeof text //returns "string"
typeof person //returns "object"
typeof array //returns "object"
```
 > Note: to see you have an array type, you use `Array.isArray(obj)`


 # Tasks

 1. Read through this Guide
 2. Complete the excercises

 # Excercises

 1. Fill in the blanks for each example, Use the `SpecRunner.html` to check your answers!
