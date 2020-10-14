// Package
import React from 'react';

// Local
import './App.css';
import WpHeader from '../header';
import WpSearch from '../search';
import WpFooter from '../footer';

function App() {
  return (
    <div className="App">
      <WpHeader />
      <WpSearch />
      <WpFooter />
    </div>
  );
}

export default App;
