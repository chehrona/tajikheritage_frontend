import React from 'react';

// Material UI
import { IconButton } from '@mui/material';

// Styled components
import {
    IconContainer,
    StyledDownIcon,
    StyledUpIcon,
    Image,
} from './ornateLineStyles';

export default function OrnateLine({ isDropdownOpen, setIsDropdownOpen }) {
    return (
        <IconContainer>
            <Image right={true} alt="arrow" />
            <IconButton
                onClick={() => setIsDropdownOpen((prevState) => !prevState)}
            >
                {isDropdownOpen ? <StyledUpIcon /> : <StyledDownIcon />}
            </IconButton>
            <Image alt="arrow" />
        </IconContainer>
    );
}
