import React from 'react';

export default () => (
    <div>
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt={"logo"}/>
        <h1 className="titleBold"> CURRENCY </h1>
        <h1 className="title"> CONVERTER </h1>
    </div>
);
