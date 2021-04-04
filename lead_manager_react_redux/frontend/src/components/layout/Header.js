import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div>
        <nav style={{
          width: '100%',
          fontSize: '25px',
          fontWeight: 'bold',
          textAlign: 'center',
          margin: '20px 0',
          borderBottom: '2px #ccc solid'
        }}
        >
        <h1>Lead Manager</h1>
        </nav>
      </div>
    )
  }
}

export default Header

