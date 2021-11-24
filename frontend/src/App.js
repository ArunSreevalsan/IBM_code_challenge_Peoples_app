import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import TodosList from './components/todos-list.component';
import CreateTodo from './components/create-todo.component';
import EditTodo from './components/edit-todo.component';
import VoteTodo from './components/vote-todo.component';
import ResTodo from './components/res-todo.component';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="">
              <img src = {logo} width="30" height="30" alt="logo" />
            </a>
            <Link to="/" className="navbar-brand">People's App</Link> 
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Poll Topics</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Post your concern</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/Profile" className="nav-link">Profile</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/results" className="nav-link">Results</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/x" className="nav-link">Logout</Link>
                </li>
              </ul>
            </div>

          </nav>

          <Route path='/' exact component={TodosList} />
          <Route path='/edit/:id' component={EditTodo} /> 
          <Route path='/create' component={CreateTodo} /> 
          <Route path='/Profile' component={VoteTodo} /> 
          <Route path='/results' component={ResTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
