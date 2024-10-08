import styled, { css } from 'styled-components';
import { IconButton } from '@mui/material';

// Types
import { StyledButtonProps } from './types/styleTypes';

export const StyledButton = styled(IconButton)<StyledButtonProps>`
    width: 4rem;
    height: 4rem;
    color: var(--primary-gold-color);
    ${({ $disabled }) =>
        $disabled
            ? css`
                  opacity: 0;
                  pointer-events: none;
              `
            : css`
                  opacity: 1;
                  pointer-events: all;
              `};

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 4.5rem;
        height: 4.5rem;
    }
`;

export const Arrow = styled.div`
    color: var(--secondary-gold-color);
    height: 100%;
    width: 100%;
    border: 1px solid var(--secondary-gold-color);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #bd9d5266;
    transition: 0.3s box-shadow;

    &:hover {
        box-shadow: var(--primary-box-shadow) var(--secondary-white-color);
    }

    @media (max-device-width: 1024px) {
        &:hover {
            box-shadow: 0rem 0rem 0rem 0rem var(--secondary-white-color);
        }
    }
`;
