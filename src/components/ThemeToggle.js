import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggle extends Component {
  static contextType = ThemeContext;

  render() { 
    const { toggleTheme } = this.context;
    // Context is designed to share data that can be considered “global” for a tree of React components
    return ( <button onClick={toggleTheme}>Toggle the theme</button>);
  }
}
 
export default ThemeToggle;