import React, { Component } from "react";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Dashboard from './components/Dashboard'

class App extends Component {
  state = {
    loggedIn: false
  };

  handleLogin = () => {
    this.setState({
      loggedIn: true
    });
  };

  render() {
    return (
      <div>
        {this.state.loggedIn ? (
          <Dashboard />
        ) : (
          <Login handleLogin = {this.handleLogin}/>
        )}
      </div>
    );
  }
}

export default App;
