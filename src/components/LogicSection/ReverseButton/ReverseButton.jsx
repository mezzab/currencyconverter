import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import swal from 'sweetalert';

const ReverseButton = ({ onClick }) => (
    <div className="arrowsContainer" onClick={onClick} title="Reverse currencies" >
        <FontAwesome
            className="arrows"
            name="long-arrow-down"
            size="2x"
        />
        <FontAwesome
            className="arrows"
            name="long-arrow-up"
            size="2x"
        />
    </div>
);


ReverseButton.propTypes = {
    onClick: PropTypes.func,
};

ReverseButton.defaultProps = {
    onClick: () => swal('Oops', 'Something went wrong!', 'error'),
};

export default ReverseButton;