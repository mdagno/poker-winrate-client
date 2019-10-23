import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

export default class NavBar extends React.Component{
  state = {
    expandedView: false,
  }

  handleHamburger = () => {
    this.setState({
      expandedView: !this.state.expandedView
    })
  }

  renderNavLinks = () => {
    let navLinks;
    if (this.state.expandedView === true){
      navLinks = (
      <ul className='navLinks' onClick={this.handleHamburger}>
        <NavLink to='/'>
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

  render(){
    console.log(this.state)
    return(
    <nav className='navBar'>
      <div className='hamburger-menu'>
      <i class="fas fa-bars" onClick={this.handleHamburger}></i>
      {this.renderNavLinks()}
      </div>
    </nav>
    )
  }
}