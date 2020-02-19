import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './App.css';

import PostsList from './components/PostsList';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className="App">
      <h1>Users and Posts</h1>
      <Router >
        <NavLink className="navlink" to="/userslist">Users List</NavLink>
        <NavLink className="navlink" to="/postslist">Posts List'</NavLink>

        <Route path="/userslist" component={UsersList} />
        <Route path="/postslist" component={PostsList} />
      </Router>
    </div>
  );
}
export default App;