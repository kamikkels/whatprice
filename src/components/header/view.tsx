// Package
import React from 'react';

// Media
import { ReactComponent as LogoSVG } from '../../media/logo.svg';

class WpHeaderView extends React.Component {
  render() {
    return <header className="header">
      <div className="header wrap">
        <section id="header-logo-section" className="header-logo-section">
          <LogoSVG/>
          <h1 className="header-title">Find the best prices</h1>
        </section>
      </div>
    </header>
  }
}

export default WpHeaderView;
