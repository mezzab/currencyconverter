import React from 'react';
import FontAwesome from 'react-fontawesome';

export default (props) => (
    <div className="arrowsContainer" onClick={props.onClick} title="Reverse currencies" >
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
