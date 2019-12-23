import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import ApiContext from '../../ApiContext';
import TokenService from '../../services/token-service';

export default class NavBar extends React.Component{
  state = {
    expandedView: false,
  }
  
  static contextType = ApiContext;

  handleHamburger = () => {
    this.setState({
      expandedView: !this.state.expandedView
    })
  }

  renderHamburgerMenu = () => {
    let navLinks;
    if (this.state.expandedView === true && TokenService.hasAuthToken()){
      navLinks = (
      <ul className='navLinks' onClick={this.handleHamburger}>
        <NavLink to='/home'>
        <li className="navLink one">
          Summary
        </li>
        </NavLink>
        <NavLink to='/sessions'>
        <li className="navLink two">
          Your Sessions
        </li>
        </NavLink>
        <NavLink to='/addsession'>
        <li className="navLink one">
          Add a session
        </li>
        </NavLink>
        <NavLink to='/analysis'>
        <li className="navLink two">
          Analytics
        </li>
        </NavLink>
      </ul>
      )
    }
    return navLinks;
  }

  renderNavLinks = () => {
    if(TokenService.hasAuthToken())
    return (
      <ul className="navLinksDesktop">
        <NavLink to='/home'>
        <li className="navLink one">
          Summary
        </li>
        </NavLink>
        <NavLink to='/sessions'>
        <li className="navLink two">
          Your Sessions
        </li>
        </NavLink>
        <NavLink to='/addsession'>
        <li className="navLink one">
          Add a session
        </li>
        </NavLink>
        <NavLink to='/analysis'>
        <li className="navLink two">
          Analytics
        </li>
        </NavLink>
        <NavLink to='/'>
        <li className="navLink two" onClick={() => this.context.processLogout()}>
          Logout
        </li>
        </NavLink>
    </ul>
    )
    else {
      return (
        <ul className="navLinksDesktop">
        <NavLink to='/'>
        <li className="navLink one">
          Home
        </li>
        </NavLink>
        <NavLink to='/login'>
        <li className="navLink two">
          Login
        </li>
        </NavLink>
        <NavLink to='/register'>
        <li className="navLink one">
          Register
        </li>
        </NavLink>
    </ul>
      )
    }
  }

  render(){
    return(
    <nav className='navBar'>
      <div className='hamburger-menu'>
      <i class="fas fa-bars" onClick={this.handleHamburger}></i>
      {window.innerWidth < 768 ? this.renderHamburgerMenu() : null}
      </div>
      {this.renderNavLinks()}
    </nav>
    )
  }
}