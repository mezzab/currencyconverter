import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import PropTypes from 'prop-types';

class CurrencyButton extends Component {
    static propTypes = {
        currency: PropTypes.object,
        isDisabled: PropTypes.bool,
    };

    static defaultProps = {
        isDisabled: false,
    };

    state = {
        selectedOption:  { value: 'one', label: 'One' },
    };

    handleChange = (selectedOption) => {
        this.setState({selectedOption});
    };

    render() {
        const value = this.state.selectedOption ? this.state.selectedOption.value : '';

        return (
            <div className="container">
                <Select
                    name="form-field-name"
                    value={value}
                    onChange={this.handleChange}
                    options={[
                        { value: 'one', label: 'One' },
                        { value: 'two', label: 'Two' },
                    ]}
                    wrapperStyle={{ width: '100px' }}
                />
            </div>
        )}
}

export default CurrencyButton;