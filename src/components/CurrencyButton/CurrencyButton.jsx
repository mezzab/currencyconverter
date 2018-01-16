import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import PropTypes from 'prop-types';
import services  from '../../services/request.js';

class CurrencyButton extends Component {
    static propTypes = {
        selectedOption: PropTypes.object,
    };

    static defaultProps = {
        selectedOption: { label: 'USD' },
    };

    state = {
        selectedOption: this.props.selectedOption,
        data: [],
    };

    componentWillMount = () => {
        services.currecies().then(response => {
            const data = [];
            Object.keys(response.data).map((label,i) => {
                data[i] = { label };
            });
            this.setState({ data })
        })
            .catch(err => err)
    };

    handleChange = (selectedOption) => {
        this.setState({selectedOption});
    };

    render() {
        return (
            <div className="selectContainer">
                <Select
                    name="form-field-name"
                    value={this.state.selectedOption}
                    onChange={this.handleChange}
                    options={this.state.data}
                    wrapperStyle={{ width: '100px' }}
                    autoFocus
                    clearable
                />
            </div>
        )}
}

export default CurrencyButton;