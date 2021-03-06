import React, { useState } from 'react';

import './Button.css';

const STYLES = ['btn--primary', 'btn--disabled'];

const SIZES = ['btn--medium'];

export const Button = ({
    children,
    type,
    onClick,
    buttonSize,
    buttonStyle
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0]
    
    const checkButtonSize = SIZES.includes(buttonSize)
        ? buttonSize
        : SIZES[0]
    
    return(
        <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}    
        >
            {children}
        </button>
    )
}

export default Button;
