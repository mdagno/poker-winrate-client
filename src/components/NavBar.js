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
    console.log('Woohoo hamburger!')
  }

  renderNavLinks = () => {
    let navLinks;
    if (this.state.expandedView === true){
      navLinks = (
      <ul className='navLinks'>
        <li>
        <NavLink to='/'>
          Summary
        </NavLink>
        </li>
        <li>
        <NavLink to='/sessions'>
          Your Sessions
        </NavLink>
        </li>
        <li>
        <NavLink to='/addsession'>
          Add a session
        </NavLink>
        </li>
        <li>
        <NavLink to='/analysis'>
          Analytics
        </NavLink>
        </li>
      </ul>
      )
    }
    else {
      navLinks = '';
    }

    return navLinks;
  }

  render(){
    console.log(this.state)
    return(
    <nav className='navBar'>
      <i class="fas fa-bars" onClick={this.handleHamburger}></i>
      {this.renderNavLinks()}
    </nav>
    )
  }
}