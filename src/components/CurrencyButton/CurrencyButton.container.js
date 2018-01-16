import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startApp } from '../../actions/action';
import CurrencyButton from './CurrencyButton';

function mapStateToProps({ conversions }) {
  return {
    conversions,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ startApp }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyButton);
