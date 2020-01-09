import React from 'react';
import './Registration.css';
import AuthService from '../../services/auth-service';
import { Link } from 'react-router-dom';

export default class Registration extends React.Component {
  state = {
    error: null,
    email: '',
    username: '',
    password: '',
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const {email, username, password} = this.state;
    AuthService.newUser({email, username, password})
    .then(() => {
      this.props.history.push('/login');
    })
    .catch(res => {
      this.setState({
        error: res.error
      })
    })
  }

  render() {
    return (
      <form id="registration-form" onSubmit={this.handleSubmit}>
        <h3 id="registration-header">Register</h3>
        <label htmlFor="username" className="login-details">E-mail</label>
        <input type="text" className="login-details" name="email" onChange={e => this.handleInputChange(e)}></input>
        <label htmlFor="username" className="login-details">Username</label>
        <input type="text" className="login-details" name="username" onChange={e => this.handleInputChange(e)}></input>
        <label htmlFor="password"className="login-details">Password</label>
        <input type="password" className="login-details" name="password" onChange={e => this.handleInputChange(e)}></input>
        {/* <label htmlFor="confirm-password" className="login-details">Confirm Password</label>
        <input type="password" className="login-details" name="password" onChange={e => this.handleInputChange(e)}></input> */}
        <button type="submit" id="login-button">Register</button>
        {this.state.error && <p>{this.state.error}</p>}
        <Link to="/login">Already have an account?</Link>
      </form>
    )
  }
}