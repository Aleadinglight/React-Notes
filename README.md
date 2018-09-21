# React notes and tutorial

## Requirements

1. Install `npm`.

2. Run `npm i -g create-react-app@1.5.2` to install react-CLI on node.js

3. Run `create-react-app your-app` to create new React application.

## Notes

This is JSX (Javascript XML) markup:

```javascript
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

To make this code works, we need to pass it through Babel - a modern Javascript compiler and convert it to syntax that browsers understand.

## Examples

1. [Counter](../master/Counter): Create a counter that can be delete, reset and modify.
