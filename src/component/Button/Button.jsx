import React from 'react';

const Button = (props) => {
    const {children} = props;
    return (
        <div className='text-center my-4 text-white'>
            {/* <button class="btn btn-active btn-accent">Sort BY Name</button> */}
            <button className="btn btn-active btn-accent">{children}</button>
        </div>
    );
};

export default Button;