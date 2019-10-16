---
Layout: default
Title: "Event Listener "
Date: 16-10-2019

---

# What is an Event Listener?

An event listener is a procedure or function in a computer program that waits for an event to occur; that event may be a user clicking or moving the mouse, pressing a key on the keyboard, or an internal timer or interrupt. The listener is in effect a loop that is programmed to react to an input or signal.

# Different methods that can be used in Event Listening

## Event Delegation
Event delegation promotes binding as few DOM event handlers as possible, since each event handler requires memory. For example, let’s say that we have an HTML unordered list we want to bind event handlers to. Instead of binding a click event handler for each list item (which may be hundreds for all we know), we bind one click handler to the parent unordered list itself.

## Debounce
There are several situations in JavaScript where you want a function that is bound to an event to fire only once after a specific amount of time has passed. Functions bound to the resize and scroll events are the typical candidates. Invoking a function every time one of these events fires will significantly impact performance. Enter the JavaScript debounce function.

## RequestAnimationFrame
If you have the urge to perform animations in Javascript, then you have probably used a setTimeout or setInterval to achieve this. This is bad for a whole number of reasons, the biggest one being they will suck performance from your visitors browser and flatten their little phone batteries.

## Throttling
Throttling is a straightforward reduction of the trigger rate. It will cause the event listener to ignore some portion of the events while still firing the listeners at a constant (but reduced) rate.