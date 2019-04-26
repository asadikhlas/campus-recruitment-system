import React, { Component } from "react";
import Login from "./components/Auth/Login";
import Dashboard from "./components/Dashboard";
import CompanyDashboard from "./components/Company/CompanyDashboard";

// import AdminLogin from './components/Admin-panel/adminLogin';

class App extends Component {
  state = {
    loggedIn: false,
    role: "company"
  };

  handleRole = event => {
    this.setState({
      role: event.target.value
    });
  };

  handleLogin = () => {
    this.setState({
      loggedIn: true
    });
  };

  getDashboard = role => {
    switch (role) {
      case "student":
        return <Dashboard role={this.state.role} />;

      case "company":
        return <CompanyDashboard role={this.state.role} />;
    }
  };

  render() {
    return (
      <div>
        {this.state.loggedIn && this.state.role.length > 0 ? (
          this.getDashboard(this.state.role)
        ) : (
          <Login
            handleLogin={this.handleLogin}
            role={this.state.role}
            handleRole={this.handleRole}
          />
        )}
       
      </div>
    );
  }
}

export default App;
