import styled from 'styled-components';
import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

export const StyledIconButton = styled(IconButton)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    // Don't delete or else can't click
    position: absolute;
    z-index: 10;

    &.MuiIconButton-root {
        width: calc(var(--header-height) - 2rem);
        height: calc(var(--header-height) - 2rem);
        padding: 0.15rem;
    }

    @media (max-width: 480px) {
        &.MuiIconButton-root {
            width: calc(var(--header-height) - 0.75rem);
            height: calc(var(--header-height) - 0.75rem);
        }
    }
`;

export const StyledCloseIcon = styled(Close)`
    color: var(--primary-gold-color);

    &.MuiSvgIcon-root {
        height: 100%;
        width: 100%;
    }
`;
