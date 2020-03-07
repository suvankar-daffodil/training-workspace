import React from "react";
import "./App.css";
import SignupForm from "./Components/SignupFormComponent/signupFormComponent";
import LoginForm from "./Components/LoginFormComponent/loginFormComponent";

import Users from "./Components/usersComponent";

import { Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    fetch("http://localhost:5000/users")
      .then(response => response.json())
      .then(data => {
        this.setState({ users: data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <ul>
          <li>
            <Link replace to="/">Home</Link>
          </li>
          <li>
            <Link replace to="/users">Users</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" render={() => <h1>WELCOME TO HOMEPAGE</h1>} />
          <Route
            path="/users"
            render={props => <Users users={this.state.users} {...props} />}
          />
        </Switch>
      </>
    );
  }
}

export default App;
