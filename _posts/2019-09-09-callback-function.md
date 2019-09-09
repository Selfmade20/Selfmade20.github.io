---
Layout: default
Title: "Callback Function"
Date: 06-09-2019
---


#What is a Callback?

A call back is a function that is to be executed after another function has finished executing.
In Javascript, functions are objects. Because of this, functions can take functions as arguments, 
and can be returned by other functions. Functions that do this are called Higher-order functions.
Any function that is passed as an argument is called a callback function.

#Why do we need Callbacks?
For one very important reason - JavaScript is an event driven language. This means that instead of waiting
for a response before moving on, Javascript will keep executing while listening for other events. 

##Here's an example below:

function first(){
  // Simulate a code delay
  setTimeout( function(){
    console.log(1);
  }, 500 );
}
function second(){
  console.log(2);
}
first();
second();