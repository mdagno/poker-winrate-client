import React from 'react';
import ApiContext from '../../ApiContext';
import AuthService from '../../services/auth-service';
import ApiService from '../../services/api-service';
import './Login.css';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
  static contextType = ApiContext;
  state = {
    username: '',
    password: '',
  }


  handleLoginSuccess = () => {
    const { location, history } = this.props
    console.log(location.state)
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  submitLogin = e => {
    e.preventDefault();
    const { username, password } = e.target;

    AuthService.postLogin({
      username: username.value,
      password: password.value
    })
      .then(res => {
        username.value = '';
        password.value = '';
        this.context.processLogin(res.authToken)
        this.props.history.push('/')
      })
      .catch(res => {
        this.setState({
          error: res.error
        })
      })
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form id="login-form" onSubmit={e => this.submitLogin(e)}>
        <h3 id="login-header">Login</h3>
        <label htmlFor="username" className="login-details">Username</label>
        <input type="text" className="login-details" name="username" onChange={e => this.handleInputChange(e)}></input>
        <label htmlFor="password"className="login-details">Password</label>
        <input type="password" className="login-details" name="password" onChange={e => this.handleInputChange(e)}></input>
        <button type="submit" id="login-button">Login</button>
        <Link to="/register">Don't have an account?</Link>
      </form>
    )
  }
}