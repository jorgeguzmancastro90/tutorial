
// DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types'

// ASSETS
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  }
  render() {
    const {title, items} = this.props
    return (
      <div className="Header">
        <div className="Logo">
          <img src={logo} alt="logo" />
          <h1>{title}</h1>

          <ul className="menu">
              {items && items.map((item, key)=> <li key={key}>{item.title}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
