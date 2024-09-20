import React, { FC } from 'react';

// Material UI
import { IconButton } from '@mui/material';

// Types
import { OrnateLineProps } from './types/componentTypes';

// Styled components
import {
    IconContainer,
    StyledDownIcon,
    StyledUpIcon,
    Image,
} from './ornateLineStyles';

const OrnateLine: FC<OrnateLineProps> = ({
    isDropdownOpen,
    setIsDropdownOpen,
}) => {
    return (
        <IconContainer>
            <Image $right={true} />
            <IconButton
                onClick={() => setIsDropdownOpen((prevState) => !prevState)}
            >
                {isDropdownOpen ? <StyledUpIcon /> : <StyledDownIcon />}
            </IconButton>
            <Image $right={false} />
        </IconContainer>
    );
};

export default OrnateLine;
