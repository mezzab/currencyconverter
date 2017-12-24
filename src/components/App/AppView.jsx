import CurrencyButton from '../CurrencyButton';
import React, { Component } from 'react';
import Title from '../Title';

class App extends Component {
  test = { value: 'one', label: 'One' };

  render() {
    return (
      <div className="container">
        <Title />
        <CurrencyButton isEditable />
      </div>
    );
  }
}

export default App;

