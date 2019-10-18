import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

export default class NavBar extends React.Component{

renderNavRoutes = () => {

}

  render(){
    return(
    <nav className='navBar'>
      <ul>
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
    </nav>
    )
  }
}