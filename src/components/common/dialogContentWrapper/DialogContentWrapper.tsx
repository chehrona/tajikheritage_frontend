import React from 'react';

// Types
import { DialogContentProps } from './types/componentTypes';

// Styled components
import { StyledContent } from './dialogContentWrapperStyles';

const DialogContentWrapper: React.FC<DialogContentProps> = ({
    height,
    children,
}) => {
    return <StyledContent>{children}</StyledContent>;
};

export default DialogContentWrapper;
