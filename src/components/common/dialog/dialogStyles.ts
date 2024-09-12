import styled from 'styled-components';
import { Dialog } from '@mui/material';

// Types
import { StyledDialogProps } from './types/styleTypes';

export const StyledDialog = styled(Dialog)<StyledDialogProps>`
    & .MuiPaper-root {
        font-size: var(--body-text);
        border-radius: ${({ $border }) => $border && $border};
        box-shadow: 0rem 0rem 0.3rem 0rem var(--primary-black-color);
        width: ${({ $width }) => $width && $width};
        max-width: ${({ $width }) => $width && $width};
        height: ${({ $height }) => $height && $height};
        background-color: ${({ $background }) => $background && $background};

        @media (max-width: 480px) {
            font-size: var(--body-text);
            margin: 0rem;
            width: calc(100vw - (2 * var(--page-padding)));
            max-width: calc(100vw - (2 * var(--page-padding)));
            height: ${({ $height }) => ($height ? $height : 'fit-content')};
        }
    }

    & .MuiModal-backdrop {
        background-color: ${({ $backdrop }) => $backdrop && $backdrop};
    }
`;

export const DialogHeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: calc(var(--text-segment-gap) / 2);
`;
