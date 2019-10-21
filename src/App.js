import React from 'react';
import './App.css';
import SessionForm from './components/SessionForm';
import NavBar from './components/NavBar';
import SessionList from './components/SessionList';
import Session from './components/Session'
import Analytics from './components/Analytics'
import HomePage from './components/HomePage'
import EditSession from './components/EditSession'
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import ApiService from './services/api-service';
import ApiContext from './ApiContext';
import config from './config'


export default class App extends React.Component {
  static contextType = ApiContext;

  componentDidMount() {
    ApiService.getSessions()
    .then(this.context.setSessionsList)
    .catch(this.context.setError)
  }


  render(){
  return (
    <div className="App">
      <header className="App-header">
        <Link to='/'>
          <h1>Poker WinRate</h1>
          <i class="fas fa-chart-line"></i>
        </Link>
        <h2>Find your edge</h2>
      </header>

      <Switch>
      <NavBar />
      </Switch>
      <main>
        <Switch>
        <Route 
        exact path='/'
        render={(props) => <HomePage {...props}/>}
        />
        <Route 
        expact 
        path='/addsession'
        render={(props) => <SessionForm {...props}/>}
        />
        <Route 
        exact path='/sessions'
        render={(props) => <SessionList {...props} />}
        />
        <Route 
        exact path='/analysis'
        render={(props) => <Analytics {...props} />}
        />
        <Route 
        exact path='/sessions/:session_id'
        render={(props) => <Session {...props} />}
        />   
        <Route 
        exact path='/sessions/:session_id/edit'
        render={(props) => <EditSession {...props} />}
        />
        </Switch>
      </main>
    </div>
  );
  }
}
