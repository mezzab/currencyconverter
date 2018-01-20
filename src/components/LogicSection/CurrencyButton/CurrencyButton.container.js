import { connect } from 'react-redux';
import CurrencyButton from './CurrencyButton';

function mapStateToProps({ conversions, isLoading }) {
  return {
    conversions,
    isLoading,
  };
}

export default connect(mapStateToProps, null)(CurrencyButton);
