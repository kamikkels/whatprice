import React from 'react';
import './app.css';
import WpHeader from '../header';
import WpSearch from '../search';
import WpFooter from '../footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <WpHeader />
        <WpSearch />
        <WpFooter />
      </div>
    );
  }
}

export default App;
