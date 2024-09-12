import React from 'react';

// Styled components
import { StyledIconButton, StyledCloseIcon } from './closeButtonStyles';

const CloseButton: React.FC<{ handleClose: () => void }> = ({
    handleClose,
}) => {
    return (
        <StyledIconButton onClick={handleClose}>
            <StyledCloseIcon />
        </StyledIconButton>
    );
};

export default CloseButton;
