---
Layout: default
Title: "3 clean code principles for the functional programming beginner "
Date: 15-10-2019

---

# 3 clean code principles for the functional programming beginner

1. Name things meaningfully

When you name a variable the name you give it must tell us that variable's whole life story. It must tell us who the variable is and why it is. The name is a selling point of a variable and that's why it must be properly described.

It should tell you why it exists, what it does, and how it is used. If a name requires a comment, then the name is not meaningful.

consider the variable:

`const p = [] //list of pets`

P can be anything, which would make it harder to read when this variable is used within a complex loop or function.

This is a more meaningful name: 

`const bertsPetList = []`

because it tells you

**What?** *list of pets belonging to bert*
**Why?** *for code operations that are interested in Bert and his pets*
**How?** *as a standard js array*

2. Function names must reveal intent

When naming a function we must also think of "What?", "Why?" and "How?"

What does it do?
Why does it do this?
How does it do this?

**Take for example you wanted to get a list of animals specific owners might have that are allowed to stay with their owner inside the house.**

`const bertsPets = [`
    `{`
       `name: "Snizzles"`
       `type: "nope"`
       `lives: "outdoors"`
    `},`
    `{`
       `name: "Terrance"`
       `type: "danger-woof"`
       `lives: "outdoors"`
    `},`
    `{`
     `  name: "Kevin"`
       `type: "doggo"`
       `lives: "indoors"`
    `}`
`]`

3. Functions should do one thing

When creating our functions we should make sure that they achieve only one defined goal

Now imagine the following function: 

`const favoritePets = ['cat', 'doggo']`

`const getFavoritePets = (favoritePets, petList) => {`
      ` const ownerHasCats = hasPetType('cats', petList);`
       `if(!ownerHasCats){`
          `const cats = [cat1, cat2, cat3]`
          `const petsWithCats = insertPets(cats, petList)`
          `return filterPets(favoritePets, petsWithCats )`
       `}`
       `return filterPets(favoritePets, petList )`
`}`

This function should only be getting the owner's favorite pets but it also tries to find out if the owner's cats have been added to his pet list and inserts them if they aren't available. This violates the Single Responsibility Principle because this function is doing too many things. It has many responsibilities. It's name is getFavoritePets
not getFavoritePetsAndCheckIfOwnerHasCatsIfNotAddCatsToTheOwnersPetList
😂

A better way of doing this would be:

`const cats = [cat1, cat2, cat3]`

`const bertsPetsWithCats = insertPets(cats, bertsPets)`

`const favoritePets = ['cat', 'doggo']`

`const getFavoritePets = (favoritePetTypes, petList) => filterPets(favoritePetTypes, petList);`

`const bertsFavoritePets = getFavoritePets(favoritePets, bertsPetsWithCats)`

## Recap

There are 3 basic principles we must follow in order to write clean code in a functional programming paradigm.

1. Name things meaningfully
2. Do not Repeat Yourself
3. Functions should do one thing