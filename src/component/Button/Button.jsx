import React from 'react';

const Button = (props) => {
    console.log(props);
    const {children} = props;
    return (
        <div>
            {/* <button class="btn btn-active btn-accent">Sort BY Name</button> */}
            <button class="btn btn-active btn-accent">{children}</button>
        </div>
    );
};

export default Button;