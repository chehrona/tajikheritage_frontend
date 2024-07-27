import styled from 'styled-components';
import { IconButton } from '@mui/material';

export const StyledIconButton = styled(IconButton)`
    width: 2.5rem;
    height: 2.5rem;
    margin-top: -0.1rem;

    &.MuiIconButton-root {
        color: #fcf6e9;
        margin-left: 0.3rem;
        border: 0.0625rem solid #bd9d52;
        background-color: #70654a;
        box-shadow: 0rem 0rem 0.3rem 0rem #bd9d52;

        &:hover {
            transition: 0.1s all;
            background-color: #bd9d52;
            box-shadow: 0rem 0rem 0.3rem 0rem #0f0a00;
        }

        svg {
            filter: drop-shadow(0px 0px 1px #0f0a00);
        }
    }

    @media (max-device-width: 1024px) {
        &.MuiIconButton-root {
            &:hover {
                transition: none;
                background-color: #70654a;
                box-shadow: 0rem 0rem 0.3rem 0rem #bd9d52;
            }

            svg {
                filter: drop-shadow(0px 0px 0px #0f0a00);
            }
        }
    }
`;
