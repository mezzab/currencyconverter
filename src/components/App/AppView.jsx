import CurrencyButton from '../CurrencyButton';
import React, { Component } from 'react';
import Title from '../Title';

class App extends Component {
  render() {
    return (
      <div className="superContainer">
        <Title />
          <div className="logicContainer">
              <div className="currencyBox">
                  <CurrencyButton />
                  <input className="input" type="number" name="primary" />
              </div>
              <div className="currencyBox">
                  <CurrencyButton/>
                  <input className="input" type="number" name="secondary" />
              </div>
          </div>
      </div>
    );
  }
}

export default App;

