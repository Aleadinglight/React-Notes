# React notes and tutorial

## Requirements

1. Install `npm`.

2. Run `npm i -g create-react-app@1.5.2` to install react-CLI on node.js

3. Run `create-react-app your-app` to create new React application.

## Notes

1. This is JSX (Javascript XML) markup. To make this code works, we need to pass it through Babel - a modern Javascript compiler and convert it to syntax that browsers understand.

```jsx
<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to React</h1>
  </header>
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
</div>
```

2. Redux helps apps to scale by providing a sensical way to manage state through a undirectional data flow model. An app without Redux may have many components that each has its own state, and they talk to each other and update each other state. So the state of the app may be come extremely convoluted and confusing. An app with Redux has one master state, and components send request to update master state. Then state changes from master state flow down to all the components.

## Examples

1. [Counter](../master/Counter): Create a counter that can be delete, reset and modify.

2. [React with Redux](../master/react_with_redux): Using Redux in React to manage the state of a users and products.
