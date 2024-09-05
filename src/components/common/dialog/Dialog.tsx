import React from 'react';

// Types
import { DialogProps } from './types/componentTypes';

import {
    StyledDialog,
    StyledCloseButton,
    StyledCloseIcon,
} from './dialogStyles';

const Dialog: React.FC<DialogProps> = ({
    handleClose,
    open,
    children,
    width,
    backdrop,
    background,
    height,
    border,
}) => {
    return (
        <StyledDialog
            open={open}
            fullWidth
            $width={width}
            $border={border}
            $height={height}
            $backdrop={backdrop}
            $background={background}
        >
            <StyledCloseButton onClick={handleClose}>
                <StyledCloseIcon />
            </StyledCloseButton>
            {children}
        </StyledDialog>
    );
};

export default Dialog;
