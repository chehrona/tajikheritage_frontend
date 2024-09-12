import styled from 'styled-components';
import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

export const StyledIconButton = styled(IconButton)`
    display: flex;
    justify-content: center;
    width: 100%;
    position: absolute;
    z-index: 10;

    @media (max-width: 480px) {
        &.MuiIconButton-root {
            width: calc(var(--header-height) - 0.5rem);
            height: calc(var(--header-height) - 0.5rem);
        }
    }
`;

export const StyledCloseIcon = styled(Close)`
    color: var(--primary-gold-color);

    @media (max-width: 480px) {
        &.MuiSvgIcon-root {
            height: 2.25rem;
            width: 2.25rem;
        }
    }
`;
