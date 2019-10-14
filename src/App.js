import React from 'react';
import './App.css';
import SessionForm from './components/SessionForm';
import NavBar from './components/NavBar';
import SessionList from './components/SessionList';
import Graph from './components/Graph'
import STORE from './dummy-store'
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';

export default class App extends React.Component {
  
  render(){

  return (
    <div className="App">
      <header className="App-header">
        <Link to='/'>
          <h1>Poker WinRate</h1>
        </Link>
        <h2>Find your edge</h2>
      </header>

      <Switch>
      <NavBar />
      </Switch>
      <main>
        <Switch>
        <Route 
        expact 
        path='/addsession'
        render={(props) => <SessionForm {...props}/>}
        />
        <Route 
        exact path='/sessions'
        render={(props) => <SessionList {...props} Store={STORE}/>}
        />
        <Route 
        exact path='/analysis'
        render={(props) => <Graph {...props} Store={STORE}/>}
        />
        </Switch>
      </main>
    </div>
  );
  }
}
