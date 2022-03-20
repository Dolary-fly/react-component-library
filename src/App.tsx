import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import TodoList from './components/todolist';

function App() {
  return (
    <div className="App">
      <Test/>
      <TodoList/>
    </div>
  );
}

export default App;
