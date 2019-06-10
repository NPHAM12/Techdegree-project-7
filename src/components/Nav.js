import React from 'react';
import {NavLink} from 'react-router-dom';

// Link to a specific route when licking on a default selection on screen
const Nav = () => {
  // Render a selection if it is selected by clicking
  return(
  <nav className="main-nav">
    <ul>
      <li><NavLink to='/about' activeStyle={{background: 'tomato'}}> About </NavLink></li>
      <li><NavLink to='/oceans' activeStyle={{background: 'tomato'}}> Ocean </NavLink></li>
      <li><NavLink to='/mountains' activeStyle={{background: 'tomato'}}> Mountain </NavLink></li>
      <li><NavLink to='/forests' activeStyle={{background: 'tomato'}}> Forest </NavLink></li>
      <li><NavLink to='/snows' activeStyle={{background: 'tomato'}}> Snow </NavLink></li>
    </ul>
  </nav>
  );
}
export default Nav;
