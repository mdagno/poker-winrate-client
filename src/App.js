import React from 'react';
import './App.css';
import SessionForm from './components/SessionForm';
import NavBar from './components/NavBar';
import SessionList from './components/SessionList';
import { Route } from 'react-router-dom';

export default class App extends React.Component {
  
  render(){

  return (
    <div className="App">
      <header className="App-header">
        <h1>Poker WinRate</h1>
        <h2>Find your edge</h2>
      </header>
      <main>
        <SessionForm />
      </main>
    </div>
  );
  }
}
