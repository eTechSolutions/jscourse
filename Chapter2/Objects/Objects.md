# JavaScript Objects

## Introduction
Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. The concept of objects in JavaScript can be understood with real life, tangible objects.

In JavaScript, an object is a standalone entity, with properties and type. Compare it 
with a cup, for example. A cup is an object, with properties. A cup has a color, 
a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.


## What makes up an object
Objects have a type, properties and methods


```JavaScript
typeof object === 'object';

object.method = function(){}

object.property = "property"
```

properties or methods that have not been assigned are classed as `undefined` not `null`

object properties can also be accessed 2 ways

### Dot Notaton

```JavaScript
object.property
```

### Bracket Notation

```JavaScript
object["property"]
```
properties created with the bracket 

# Tasks
1. Look at `objects.js` and read thorugh some examples
2. move on to the excercise once you understand how objects work 

# Excercises

For the excercise your job is to create an object called `person` which must fill this criteria 

* Must have a `firstName` property which is set to `"test"`
* Must have a `lastName` property which is set to `"person"`
* Must have a method called `walk` which will return a string : `walking`
* Must have an `age` property which is set to `24`