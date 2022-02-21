import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import { AppContextProvider } from './contexts/context';
import ThemeContextProvider from './contexts/ThemeContext'

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle />  
      </AppContextProvider>
      {/* we can warp the components with AuthContextProvider outside or inside of ThemeContextProvider. It won't make any difference */}
    </div>
  );
}
// To keep context re-rendering fast, React needs to make each context consumer a separate node in the tree.
export default App;