import React from 'react';

// Types
import { ButtonProps } from './types/componentTypes';

// Styled components
import { StyledButton } from './customButtonStyles';

const CustomButton: React.FC<ButtonProps> = ({ text, handleClick, width }) => {
    return (
        <StyledButton $width={width} onClick={handleClick}>
            {text}
        </StyledButton>
    );
};

export default CustomButton;
