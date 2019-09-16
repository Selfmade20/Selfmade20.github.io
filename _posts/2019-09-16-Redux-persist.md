---
Layout: default
Title: "Life cycle methods "
Date: 13-09-2019

---


# Why use it?
Redux-persist is a well structured and useful library for use on react projects using everyone’s favorite state management tool (mad props Dan). Persisting state across sessions perceives as simple but is actually dreadfully complicated. The number of edge cases regarding the user and how they have interacted with the app prior is countless. Redux-persist promises to retain the users’ redux-state which is an attractive proposition for most developers.Since your user won’t give a damn how amazing the features of your app are, if you’re constantly asking them to re-login.

# The setup
The setup is really well explained here and here. So under the guise of not reinventing the wheel but actually because I am lazy, which is apparently a good thing, I’ll leave it up to Mark and Clark.

# The bones of it
The library can initially be overwhelming with information and has changed rapidly and vastly since I first started using it. The current version is v5, I came on board at v4, which is now deprecated, and it’s changed a lot, even since then.
The main file you will interact with is the store, there you will define how many levels of the state you want to save.

# Keeping track of your state
IMHO the redux-logger is the best way to keep track of your state with redux. I have never had a great time with the highly regarded redux-dev-tools-extension. They always crash and I’m not a believer in learning yet another intricate dashboard environment for such a specific use case. That being said, they may work better now, so don’t let me stop you.I also have an Air, which according to Christian is not the issue, but I’m not sold. The redux-logger happens all within the google chrome dev tools console as you can see in this screenshot. I will now walk you through a day in the redux-persists’ lifecycle. 🤦🏻