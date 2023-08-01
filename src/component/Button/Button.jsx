import React from 'react';


const Button = ({ children }) => {
    return (
        <div className='text-center my-4 text-white'>
            <button className="btn btn-active btn-accent">{children}</button>
        </div>
    );
};

export default Button;