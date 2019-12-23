import React from 'react';
import './App.css';
import SessionForm from './components/SessionForm/SessionForm';
import NavBar from './components/NavBar/NavBar';
import SessionList from './components/SessionList/SessionList';
import Session from './components/Session/Session'
import Analytics from './components/Analytics/Analytics'
import HomePage from './components/HomePage/HomePage'
import EditSession from './components/EditSession/EditSession'
import Landing from './components/Landing/Landing';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { Route, Link, Switch, withRouter} from 'react-router-dom';
import ApiService from './services/api-service';
import ApiContext from './ApiContext';
import config from './config';
import PrivateRoute from './Routes/PrivateRoute';
import PublicOnlyRoute from './Routes/PublicOnlyRoute';

class App extends React.Component {
  static contextType = ApiContext;

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <Link to='/'>
          <h1>Poker WinRate</h1>
          <i class="fas fa-chart-line"></i>
        </Link>
        <Switch>
          <NavBar />
        </Switch>
      </header>

 
      <main>
        <Switch>
        <Route 
        exact path='/'
        render={(props) => <Landing {...props}/>}
        />
        <PrivateRoute 
        path={'/home'}
        component={HomePage}
        />
        <PrivateRoute 
        path={'/addsession'}
        component={SessionForm}
        />
        <PrivateRoute 
        exact path={'/sessions'}
        component={SessionList}
        />
        <PrivateRoute 
        path={'/analysis'}
        component={Analytics}
        />
        <PrivateRoute 
        exact path={'/sessions/:session_id'}
        component={Session}
        /> 
        <PrivateRoute 
        exact path={'/sessions/:session_id/edit'}
        component={EditSession}
        />  
        <PublicOnlyRoute 
        path={'/register'}
        component={Registration}
        />
        <PublicOnlyRoute 
        path={'/login'}
        component={Login}
        />
        </Switch>
      </main>
    </div>
  );
  }
}

export default withRouter(App);