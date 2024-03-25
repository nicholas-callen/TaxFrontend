import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, type, children, disabled}) => {
    return (
        <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        >
            {children}
        </button>
    );
   
};

Button.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    type: 'button',
    disabled: false,
};

export default Button;