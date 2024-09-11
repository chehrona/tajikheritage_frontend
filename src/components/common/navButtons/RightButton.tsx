import React from 'react';

// Material UI
import { ArrowForwardIos } from '@mui/icons-material';

// Types
import { ButtonProps } from './types/componentTypes';

// Styled components
import { StyledButton, Arrow } from './navButtonStyles';

const RightButton: React.FC<ButtonProps> = ({ disabled, moveNext }) => {
    return (
        <StyledButton onClick={moveNext} $disabled={disabled}>
            <Arrow>
                <ArrowForwardIos style={{ marginLeft: '1px' }} />
            </Arrow>
        </StyledButton>
    );
};

export default RightButton;
