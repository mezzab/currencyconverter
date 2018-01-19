import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  startApp,
  changeAmount,
  changePrimaryCurrency,
  changeSecondaryCurrency,
  reverseCurrency
} from '../../actions/action';
import AppView from './AppView';

function mapStateToProps({
  amount, conversions, primaryCurrency, secondaryCurrency, isLoading,
}) {
  return {
    amount,
    conversions,
    primaryCurrency,
    secondaryCurrency,
    isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    startApp,
    changeAmount,
    changePrimaryCurrency,
    changeSecondaryCurrency,
    reverseCurrency,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppView);
