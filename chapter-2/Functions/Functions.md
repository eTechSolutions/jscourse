# JavaScript Functions

## Introduction
In JavaScript, functions are first-class objects, because they can have properties
and methods just like any other object. What distinguishes them from other
objects is that functions can be called. In brief, they are Function objects.

A value is always returned from a function. You can specify what value you want to return
by simply typing `return` and a value after it (`return value`). if you dont supply a return value,
the function will return `undefined` or if the function was invoked with the `new` keyword,
it will return the value of `this`.

## Function Scope
In Javascript functions, variables declared inside a function cannot be used outside of the defined function.
This includes variables declared with ``var`` and Parameters

## Anonymous Functions
functions expressions create anonymous functions, a way to spot if your code contains anonymous functions is looking for functions for no
names, e.g

```Javascript
var expression = function(){}
```

This can be in other places not just variable assignment. A good practise is to still give the name to the function.

```JavaScript
var expression = function foo(){}
```

The reasons behind this are :
1. helps with stack traces, anonymous functions just appear as anonymous making it hard to track down the error.
2. makes it more readable, it looks easy when assigned to a function expression, but anonymous functions can be passed as parameters.

## Tasks

1. Look over functions.js to get an idea of how functions can be defined and how they work.
2. Run through the excercises in Excercise.js
3. Test your answers with **FunctionSpecRunner.html** in **ExcerciseTests**

# Excercise Rules

## Excercise 1
* You must create a function called ``test`` with **no return value** for the test to pass

* You may use a function expression or function decleration

## Excercise 2

You must create a function called ``returnTest`` which will take a parameter and return the number supplied multipled by 2

## Excercise 3
