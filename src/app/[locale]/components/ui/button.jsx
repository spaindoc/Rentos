import React from 'react';

const Button = (onClick, title, className) => {
    return (
        <button className={`bg-black, py-4 lg:py-3  uppercase text-white text-base lg:text-3xl font-oswald ${className}`}
        onClick={onClick}>
            {title}
        </button>
    );
};

export default Button;