import React from 'react';

// Material UI
import { ArrowBackIos } from '@mui/icons-material';

// Types
import { ButtonProps } from './types/componentTypes';

// Styled components
import { StyledButton, Arrow } from './navButtonStyles';

const LeftButton: React.FC<ButtonProps> = ({ disabled, movePrev }) => {
    return (
        <StyledButton onClick={movePrev} $disabled={disabled}>
            <Arrow>
                <ArrowBackIos style={{ marginLeft: '7px' }} />
            </Arrow>
        </StyledButton>
    );
};

export default LeftButton;
