import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

class Navigation extends Component {
  render() {
    const { navItems } = this.props;
    console.log(navItems);
    
    return (
    <React.Fragment>
    <nav>
        {navItems.map((item, index) => {return(<Link to={item.path} key={index}>{item.name}</Link>)})}         
    </nav>
    </React.Fragment>
    )
  }
};

export default Navigation;
