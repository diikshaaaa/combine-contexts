import React, { Component } from 'react';
import { AppContextProvider } from '../contexts/context'
// import ThemeContextProvider from '../contexts/ThemeContext';
// import AuthContextProvider from '../contexts/AuthContext';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Navbar () {
  const hookAuth =  React.useContext(AuthContext);
  const hookTheme =  React.useContext(ThemeContext);
  console.log('AuthContext and ThemeContext', hookAuth, hookTheme)
  const { isAuthenticated, toggleAuth } = hookAuth;
  const { isLightTheme, light, dark } = hookTheme;
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
}

// class Navbar extends Component {

//   render() {
//     return (
//       <AppContextProvider>{(authContext, themeContext) => {
//         console.log('authContext',authContext);
//         console.log('themeContext',themeContext)
  
//           const { isAuthenticated, toggleAuth } = authContext;
//           const { isLightTheme, light, dark } = themeContext;
//           const theme = isLightTheme ? light : dark;
          
//           return (
//             <nav style={{ background: theme.ui, color: theme.syntax }}>
//               <h1>Context App</h1>
//               <div onClick={() => toggleAuth()}>
//                 { isAuthenticated ? 'Logged in' : 'Logged out' }
//               </div>
//               <ul>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Contact</li>
//               </ul>
//             </nav>
//           )
//         }}
//         </AppContextProvider>
//     );
//   }
// }
 
// export default Navbar;

