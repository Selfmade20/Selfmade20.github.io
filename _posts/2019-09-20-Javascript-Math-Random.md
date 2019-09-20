---
Layout: default
Title: "Math Random function "
Date: 20-09-2019
---

# Javascript Math Random Function

## Introduction
When i was doing the tic tac toe game i needed a way to make the computer move by itself .So i implemented the built in function called Math.random(). At first i did not know how it worked , but now i understand the different ways of generating a random number and decided to write a blog post about it.

## Explanation
Initially if you call Math.random() in Javascript it will generate a random number from a range of 0 inclusive up to but not including 1. So me using the Math.random() did not help me because i needed a range bigger then 0 to 1 , i needed a range from 0 to 9 so if you want to use Math.random() and same how give it a bigger range and return a value thats a whole number , you are going to have to understand Math.round() which rounds off the value to the nearest whole number or Math.floor() which is the opposite. So one way of doing this is by putting the built in function Math.random() inside a function and passing in that function a argument called max , and returning the rounded off value of Math.random() * Math.floor(max). the value of max is basically the value you want to end at when a random number is generated.
