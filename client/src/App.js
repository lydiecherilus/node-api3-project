import React from 'react';
import './App.css';

import PostsList from './components/PostsList';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className="App">
      <h1>Users and Posts</h1>
      <UsersList />
      <PostsList />
     
    </div>
  );
}
export default App;
