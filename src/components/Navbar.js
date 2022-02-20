import React, { Component } from 'react';
import { AppContextProvider } from '../contexts/context'

class Navbar extends Component {

  render() {
    return (
      <AppContextProvider.consumer>{(authContext, themeContext) => {
        console.log('authContext',authContext);
        console.log('themeContext',themeContext)
  
          const { isAuthenticated, toggleAuth } = authContext;
          const { isLightTheme, light, dark } = themeContext;
          const theme = isLightTheme ? light : dark;
          
          return (
            <nav style={{ background: theme.ui, color: theme.syntax }}>
              <h1>Context App</h1>
              <div onClick={() => toggleAuth()}>
                { isAuthenticated ? 'Logged in' : 'Logged out' }
              </div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          )
        }}
        </AppContextProvider.consumer>
    );
  }
}
 
export default Navbar;