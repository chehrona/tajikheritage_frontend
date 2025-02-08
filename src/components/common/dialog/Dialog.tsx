import React from 'react';

// Material UI
import { Zoom } from '@mui/material';

// Components
import CloseButton from '../closeButton/CloseButton';

// Types
import { DialogProps } from './types/componentTypes';

// Styled components
import { StyledDialog, DialogHeaderWrapper } from './dialogStyles';

const Dialog: React.FC<DialogProps> = ({
    handleClose,
    open,
    children,
    width,
    background = '',
    height = 'auto',
    hideBackdrop = false,
}) => {
    return (
        <StyledDialog
            open={open}
            fullWidth
            $width={width}
            $height={height}
            $background={background}
            TransitionComponent={Zoom}
            TransitionProps={{
                timeout: 200,
            }}
            hideBackdrop={hideBackdrop}
        >
            <DialogHeaderWrapper>
                <CloseButton handleClose={handleClose} />
            </DialogHeaderWrapper>
            {children}
        </StyledDialog>
    );
};

export default Dialog;
