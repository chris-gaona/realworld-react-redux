// Stateless functional component
// These type of components are used when we don't need the full functionality of a class

import React from 'react';

const Banner = ({appName}) => {
    return (
        <div className="banner">
            <div className="container">
                <h1 className="logo-font">
                    {appName.toLowerCase()}
                </h1>
                <p>A place to share your knowledge</p>
            </div>
        </div>
    );
};

export default Banner;