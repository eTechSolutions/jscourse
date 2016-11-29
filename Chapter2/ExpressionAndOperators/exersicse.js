excerciseResult = {}
// Assignment 
excerciseResult.assignment _ "test";

// Comparison

//should be true
excerciseResult.isGreater = 5 _ 4;

//should be false
excerciseResult.isLess =  5 _ 4;

//should be true
excerciseResult.equals = 5 _ "5";

//should be false
excerciseResult.strictEquals = 5 _ "5";

// Logical

//should be true 
excerciseResult.shouldBeTrue = true _ true;
excerciseResult.shouldBeFalse = true _ false;

excerciseResult.shouldBeTrue2 = true _ false;
excerciseResult.shouldBeFalse2 = false _ false;

// return object
excerciseResult.object = undefined _ {};
//return undefined
excerciseResult.object2 =  undefined _ {};

excerciseResult.falseValue = _true;

// Conditional 
// objectConditional must equal {}
// the blank must be a boolean
excerciseResult.objectConditional = _ ? {} : undefined;

// typeof
excerciseResult.isObject = _ object _ 'object';

excerciseResult.isBoolean =  _ excerciseResult.falseValue _ 'boolean';

excerciseResult.isString = _ excerciseResult.assignment _ 'string';

module.exports = {}