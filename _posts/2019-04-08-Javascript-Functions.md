---
Layout: default
Title: "Javascript Functions"
Date: 08-04-2019
---

# What is a Function?

Functions are one of the fundamental building blocks in JavaScript. A function is a JavaScript 
procedure with a set of statements that performs a task or calculates a value. To use a function,
you must define it somewhere in the scope from which you wish to call it.

## Description Section

Every function in JavaScript is a Function object. See Function for information on properties and 
methods of Function objects.To return a value other than the default, a function must have a return
statement that specifies the value to return. A function without a return statement will return a 
default value. In the case of a constructor called with the new keyword, the default value is the
value of its this parameter. For all other functions, the default return value is undefined.

The parameters of a function call are the function's arguments. Arguments are passed to functions 
by value. If the function changes the value of an argument, this change is not reflected globally
or in the calling function. However, object references are values, too, and they are special: if
the function changes the referred object's properties, that change is visible outside the function.


## Defining Functions

## Function declarations Section

A function definition (also called a function declaration, or function statement) consists of the 
function keyword, followed by:

The name of the function.
A list of parameters to the function, enclosed in parentheses and separated by commas.
The JavaScript statements that define the function, enclosed in curly brackets, { }.

