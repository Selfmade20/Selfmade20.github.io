---
Layout: default
Title: "Smart and Dumb Components "
Date: 09-10-2019

---

# Dumb Components

Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM. Once that is done, the component is done with it. No keeping tabs on it, no checking in once in a while to see how things are going. Nope. Put the info on the page and move on.
The components themselves only have a render() method (they don’t need any others) and are often just Javascript functions. They don’t have internal state to manage. They wouldn’t know how to change the data they are presenting if they were asked. Ignorance is bliss.

`const Footer = (props) => {
  return(
  <div>
    <ul>
      <li>Footer Information</li>
    </ul>
  </div>
  )
}
`

A ‘hello world’ component can be thought of as the most basic dumb component. Or entire sections of a website such as a header or footer. The component can be written in one place and used several times throughout the app, just rendering it’s heart out, and each instance of that component will look the same. If you want to change the look, you only have one place to go. Easy.

# Smart Components

Smart components (or container components) on the other hand have a different responsibility. Because they have the burden of being smart, they are the ones that keep track of state and care about how the app works.
Using the container design pattern, the container components are separated from the presentational components and each handles their own side of things. The container components do the heavy lifting and pass the data down to the presentational components as props.
They are class-based components and have their own state defined in their constructor() functions.

`class App extends Component {
  constructor(props){
    super(props);
    this.state = {pictures : []};
  }
}`

These components also often contain other callback functions that are used to update the state and get passed down to their child components as props.
The root component off an app is a good example of a smart component. It is often responsible for maintaining several pieces of state for the entire app and needs to pass down additional functions to its child components so that the state can be updated when a user interacts with the site.