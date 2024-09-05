import styled from 'styled-components';
import { Close } from '@mui/icons-material';
import { IconButton, Dialog } from '@mui/material';

// Types
import { StyledDialogProps } from './types/styleTypes';

export const StyledDialog = styled(Dialog)<StyledDialogProps>`
    & .MuiPaper-root {
        font-size: 1.1rem;
        border-radius: ${({ $border }) => $border && $border};
        box-shadow: 0rem 0rem 0.3rem 0rem var(--primary-black-color);
        width: ${({ $width }) => $width && $width};
        max-width: ${({ $width }) => $width && $width};
        height: ${({ $height }) => $height && $height};
        background-color: ${({ $background }) => $background && $background};

        @media (max-width: 480px) {
            font-size: 1.3rem;
            margin: 0rem;
            width: calc(100vw - 3rem);
            max-width: calc(100vw - 3rem);
            height: ${({ $height }) => ($height ? $height : 'fit-content')};
        }
    }

    & .MuiModal-backdrop {
        background-color: ${({ $backdrop }) => $backdrop && $backdrop};
    }
`;

export const StyledCloseButton = styled(IconButton)`
    width: 3.5rem;
    height: 3.5rem;
    top: 0rem;
    right: 0rem;
    z-index: 10;

    &.MuiIconButton-root {
        position: absolute;
    }
`;

export const StyledCloseIcon = styled(Close)`
    color: var(--primary-gold-color);

    &.MuiSvgIcon-root {
        width: 3rem;
        height: 2rem;
    }

    @media (max-width: 1024px) {
        &.MuiSvgIcon-root {
            width: 3rem;
            height: 2.5rem;
        }
    }
`;
