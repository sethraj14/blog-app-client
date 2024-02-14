import React from 'react';
import './App.css';
import AppRouter from './AppRouter';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Blog App</h1>
      </div>
      <div className="main-content">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
