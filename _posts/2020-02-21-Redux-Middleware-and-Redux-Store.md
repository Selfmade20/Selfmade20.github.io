---
Layout: default
Title: "Redux Middleware and Redux Store"
Date: 21-02-2020

---

# Redux Middleware

## What is Middleware?
- *Middleware* is software that provides common services and capabilities to applications outside of what's offered by the operating system.

## Middleware in Programming
- *Middleware* provides a way to interact with actions that have been dispatched to the store before they reach the reducer in the store. Types of different uses for middleware include *logging actions*, *reporting errors*, *making asynchronous requests*, and *dispatching new actions*.

# Using Middleware in programming
-*Middleware* is used by composing the functions together and passing that function to the createStore call. The composed middleware function is used to replace the store's dispatch method with one that dispatches the action to each middleware function in the chain, with the last middleware function dispatching the action to the store

From the above definitions I can now tell what is Middleware and how does it come into play when concerning programming, but we can often see words like **Store** which I'll get into just below this Redux Middleware chapter.

# Redux tore

## What is Redux store?
- Redux store is a **Redux** state container for Javascript apps. It functions as a store that stores the whole state of the app in an immutable tree. Using redux is good because it helps when you write applications that behave consistently and run in different environments, for example *client*,*server* and *native*.

In conclusion we can conclude that **Middleware** provides interactions with actions which have dispatched to the **Redux store** before any changes are made in redux.
