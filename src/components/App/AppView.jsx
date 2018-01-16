import CurrencyButton from '../CurrencyButton';
import React, { Component } from 'react';
import Title from '../Title';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Title />
          <div className="currencyBox">
              <CurrencyButton />
          </div>
          <div className="currencyBox">
              <CurrencyButton/>
          </div>
      </div>
    );
  }
}

export default App;

