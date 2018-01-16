import CurrencyButton from '../CurrencyButton';
import React, { Component } from 'react';
import Title from '../Title';
import services  from '../../services/request.js';

class App extends Component {

    state = {
        secondaryValue: '',
    };

    componentDidMount(){
        this.primary.focus();
    }

    onPrimaryChange = ({ target: { value } }) => {

        services.latest().then(({ data: { rates } }) => {
            this.setState({
                secondaryValue: rates.ARS * value,
                })
        })
            .catch(err => err)

    };


  render() {
    return (
      <div className="superContainer">
        <Title />
          <div className="logicContainer">
              <div className="currencyBox">
                  <CurrencyButton />
                  <input onChange={this.onPrimaryChange} type="number" name="primary" id="primary" ref={(input) => { this.primary = input; }} />
              </div>
              <div className="currencyBox">
                  <CurrencyButton selectedOption={{ label: 'ARS' }}/>
                  <input className="disabledInput" type="number" name="secondary" value={this.state.secondaryValue} disabled/>
              </div>
          </div>
      </div>
    );
  }
}

export default App;

