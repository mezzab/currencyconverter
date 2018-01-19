import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import PropTypes from 'prop-types';

class CurrencyButton extends Component {
    static propTypes = {
        selectedOption: PropTypes.object,
        conversions: PropTypes.object,
        isLoading: PropTypes.bool,
        onChange: PropTypes.func.isRequired,
    };

    static defaultProps = {
        conversions: { USD: 1 },
        isLoading: false,
    };

    state = {
        labels: [],
    };

    componentWillReceiveProps = nextProps => {
        const labels = [];
        Object.keys(nextProps.conversions).map((label,i) => {
            labels[i] = { label };
        });
        return this.setState({ labels })
    };

    handleChange = (selectedOption) => {
        this.props.onChange(selectedOption.label);
    };

    render() {
        return (
            <div>
                <Select
                    name="form-field-name"
                    value={this.props.selectedOption}
                    onChange={this.handleChange}
                    options={this.state.labels}
                    wrapperStyle={{ width: '100px' }}
                    clearable={false}
                    isLoading={this.props.isLoading}
                    autoFocus
                />
            </div>
        )}
}

export default CurrencyButton;