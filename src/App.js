import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import Users from"./components/Users";
import axios from "axios";
import Search from "./components/search";
import Alert from"./components/Alert";
import About from "./components/About";
import User from"./components/User";
  
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  state = {
    users: [],
    alert: null,
    user: {},
    repos: []
  };
  // async componentDidMount() {
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   // console.log(res.data);
  //   this.setState({
  //     users: res.data
  //   });
  // }
  searchUser = async text => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(res.data.items);
    this.setState({
      users: res.data.items
    });
  };

  clearUsers = e => {
    this.setState({
      users: []
    });
  };
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };
  getDetails = async username => {
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // console.log(res.data);
    this.setState({
      user: res.data
    });
  };
  getRepos = async username => {
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=${5}&sort=${
        this.repos_sort
      }&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${
        process.env.REACT_APP_GITHUB_CLIENT_SECRET
      }`
    );
    // console.log(res.data);
    this.setState({
      repos: res.data
    });
  };

  render() {
    //CompnentDidMount()
    return (
      <Router>
        <div className="container">
          <Navbar icon="fa fa-github" title="Github Finder" />
          <Alert alert={this.state.alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Fragment>
                  <Search
                    searchUser={this.searchUser}
                    showClear={this.state.users.length > 0 ? true : false}
                    clearUsers={this.clearUsers}
                    setAlert={this.setAlert}
                  />
                  <Users obj={this.state.users} />
                </Fragment>
              )}
            />
            <Route exact path={"/about"} component={About} />
            <Route
              exact
              path={"/user/:login"}
              render={props => (
                <User
                  {...props}
                  getDetails={this.getDetails}
                  user={this.state.user}
                  getRepos={this.getRepos}
                  repos={this.state.repos}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
