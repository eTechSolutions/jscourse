
// Assignment 
var assignment _ "test";

// Comparison

//should be true
var isGreater = 5 _ 4;

//should be false
var isLess =  5 _ 4;

//should be true
var equals = 5 _ "5";

//should be false
var strictEquals = 5 _ "5";

// Logical

//should be true 
var shouldBeTrue = true _ true;
var shouldBeFalse = true _ false;

var shouldBeTrue2 = true _ false;
var shouldBeFalse2 = false _ false;

// return object
var object = undefined _ {};
//return undefined
var object2 =  undefined _ {};

var falseValue = _true;

// Conditional 
// objectConditional must equal {}
// the blank must be a boolean
var objectConditional = _ ? {} : undefined;

// typeof
var isObject = _ object _ 'object';

var isBoolean =  _ falseValue _ 'boolean';

var isString = _ assignment _ 'string';