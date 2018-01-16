import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import PropTypes from 'prop-types';
import services  from '../../services/request.js';

class CurrencyButton extends Component {
    static propTypes = {
        startApp: PropTypes.func.isRequired,
        selectedOption: PropTypes.object,
        conversions: PropTypes.object,
    };

    static defaultProps = {
        selectedOption: { label: 'USD' },
        conversions: { USD: 1 },
    };

    state = {
        selectedOption: this.props.selectedOption,
        labels: [],
    };

    componentWillMount = () => {
        this.props.startApp();
    };

    componentWillReceiveProps = nextProps => {
        const labels = [];
        Object.keys(nextProps.conversions).map((label,i) => {
            labels[i] = { label };
        });
        debugger;
        this.setState({ labels })
    };

    handleChange = (selectedOption) => {
        this.setState({selectedOption});
    };

    render() {
        debugger;
        return (
            <div>
                <Select
                    name="form-field-name"
                    value={this.state.selectedOption}
                    onChange={this.handleChange}
                    options={this.state.labels}
                    wrapperStyle={{ width: '100px' }}
                    autoFocus
                    clearable
                />
            </div>
        )}
}

export default CurrencyButton;