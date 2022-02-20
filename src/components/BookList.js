import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
  static contextType = ThemeContext;

  render() { 
    const { isLightTheme, light, dark } = this.context;
    console.log(this.context);
    const theme = isLightTheme ? light : dark;
    
    return ( 
      <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
        <ul>
          <li style={{ background: theme.ui }}>War and Peace</li>
          <li style={{ background: theme.ui }}>Atomic Model</li>
          <li style={{ background: theme.ui }}>Lost In Space</li>
        </ul>
      </div>
    );
  }
}
 
export default BookList;