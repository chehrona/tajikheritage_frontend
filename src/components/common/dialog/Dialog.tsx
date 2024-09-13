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
    background,
    height,
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
        >
            <DialogHeaderWrapper>
                <CloseButton handleClose={handleClose} />
            </DialogHeaderWrapper>
            {children}
        </StyledDialog>
    );
};

export default Dialog;
