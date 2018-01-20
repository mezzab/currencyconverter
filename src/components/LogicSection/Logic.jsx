import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CurrencyButton from './CurrencyButton';
import ReverseButton from './ReverseButton';
import { calculateSecondary } from '../../utils/utils';

class Logic extends Component {
  static propTypes = {
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    primaryCurrency: PropTypes.string.isRequired,
    secondaryCurrency: PropTypes.string.isRequired,
    changeAmount: PropTypes.func.isRequired,
    startApp: PropTypes.func.isRequired,
    changePrimaryCurrency: PropTypes.func.isRequired,
    changeSecondaryCurrency: PropTypes.func.isRequired,
    reverseCurrency: PropTypes.func.isRequired,
  };

  state = {
    secondaryValue: '',
  };

  componentDidMount() {
    this.primary.focus();
  }

  componentWillMount = () => {
    this.props.startApp();
  };

  componentWillReceiveProps = newProps => {
    const { conversions, primaryCurrency, secondaryCurrency, amount } = newProps;
    const secondaryValue = calculateSecondary(
      conversions,
      primaryCurrency,
      secondaryCurrency,
      amount,
    );
    this.setState({ secondaryValue });
  };

  onPrimaryChange = ({ target: { value } }) => {
    this.props.changeAmount(value);
  };

  render() {
    return (
      <div className="logicContainer">
        <div>
          <div className="currencyBox">
            <CurrencyButton
              onChange={this.props.changePrimaryCurrency}
              selectedOption={{ label: this.props.primaryCurrency }}
            />
            <input
              onChange={this.onPrimaryChange}
              type="number"
              name="primary"
              id="primary"
              value={this.props.amount}
              ref={input => {
                this.primary = input;
              }}
            />
          </div>
          <div className="currencyBox">
            <CurrencyButton
              onChange={this.props.changeSecondaryCurrency}
              selectedOption={{ label: this.props.secondaryCurrency }}
            />
            <input
              className="disabledInput"
              type="number"
              name="secondary"
              value={this.state.secondaryValue}
              disabled
            />
          </div>
        </div>
        <ReverseButton onClick={this.props.reverseCurrency} />
      </div>
    );
  }
}

export default Logic;
