---
Layout: default
Title: "async funtion"
Date: 06-09-2019
---


# Async function

The async function declaration defines an asynchronous function, which returns an AsyncFunction object. An asynchronous function is a function which operates asynchronously via the event loop, using an implicit Promise to return its result. But the syntax and structure of your code using async functions is much more like using standard synchronous functions.


#Description

An async function can contain an await expression that pauses the execution of the async function and waits for the passed Promise's resolution, and then resumes the async function's execution and evaluates as the resolved value.

Remember, the await keyword is only valid inside async functions. If you use it outside of an async function's body, you will get a SyntaxError.

Note that while the async function is paused, the calling function continues running (having received the implicit Promise returned by the async function).