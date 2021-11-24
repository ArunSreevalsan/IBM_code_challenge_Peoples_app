import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import TodosList from './components/todos-list.component';
import CreateTodo from './components/create-todo.component';
import EditTodo from './components/edit-todo.component';
import VoteTodo from './components/vote-todo.component';
import ResTodo from './components/res-todo.component';
import GraphTodo from './components/graph-todo.component';
import Login from './components/login.component';
import Register from './components/register.component';
import Home from './components/home.component';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="">
              <img src ="https://cdn3.vectorstock.com/i/thumb-large/43/27/meeting-chalk-icon-vector-28884327.jpg" width="30" height="30" alt="logo" />
            </a>
            <Link to="/" className="navbar-brand">People's App</Link> 
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                  <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/list" className="nav-link">Poll Issues</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Post your concern</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/Profile" className="nav-link">Profile</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/results" className="nav-link">Poll Results</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/graph" className="nav-link">Logout</Link>
                </li>
                
              </ul>
            </div>

          </nav>

          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/list' exact component={TodosList} />
          <Route path='/edit/:id' component={EditTodo} /> 
          <Route path='/create' component={CreateTodo} /> 
          <Route path='/Profile' component={VoteTodo} /> 
          <Route path='/results' component={ResTodo} />
          <Route path='/graph' component={GraphTodo} />
          <Route path='/register' component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
