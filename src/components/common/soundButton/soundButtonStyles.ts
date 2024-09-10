import styled from 'styled-components';
import { IconButton } from '@mui/material';

export const StyledIconButton = styled(IconButton)`
    width: 2.5rem;
    height: 2.5rem;
    margin-top: -0.1rem;

    &.MuiIconButton-root {
        color: var(--primary-white-color);
        margin-left: 0.3rem;
        border: 0.0625rem solid var(--primary-gold-color);
        background-color: var(--primary-shadow-color);
        box-shadow: 0rem 0rem 0.3rem 0rem var(--primary-gold-color);

        &:hover {
            transition: 0.1s all;
            background-color: var(--primary-gold-color);
            box-shadow: 0rem 0rem 0.3rem 0rem var(--primary-black-color);
        }

        svg {
            filter: drop-shadow(0px 0px 1px var(--primary-black-color));
        }
    }

    @media (max-device-width: 1024px) {
        &.MuiIconButton-root {
            &:hover {
                transition: none;
                background-color: var(--primary-shadow-color);
                box-shadow: 0rem 0rem 0.3rem 0rem var(--primary-gold-color);
            }

            svg {
                filter: drop-shadow(0px 0px 0px var(--primary-black-color));
            }
        }
    }
`;
