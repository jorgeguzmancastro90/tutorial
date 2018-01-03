// DEPENDENCIAS
import React, { Component } from 'react';
import PropTypes from 'prop-types'

// ASSETS
import './css/Footer.css';

class Footer extends Component {
  static propTypes = {
      copyright: PropTypes.string
    }
  render() {
    const { copyright = '&copy; Jorge '} = this.props
    return (
      <div className="Footer">
          <p>{copyright}</p>
      </div>
    );
  }
}

export default Footer;
