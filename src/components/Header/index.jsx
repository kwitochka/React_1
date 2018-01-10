import React from 'react';
import './styles.css';

class Header extends React.Component {
  render() {

    return (
      <header className="Header">
        <h1 className="Header__text">Movie Mate</h1>
        <ul className="Header__menu">
            <li><a href="">About</a></li>
            <li><a href="">Browse</a></li>
            <li><a href="">Login</a></li>
        </ul>
      </header>
    );
  }
}

export default Header;