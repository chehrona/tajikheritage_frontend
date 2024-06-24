import styled from 'styled-components';

import { Copyright } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const FooterContainer = styled.div`
    background: #0f0a00;
    width: 100%;
`;

export const FooterInnerContainer = styled.div`
    background: #0f0a00;
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    color: #959595;
    max-height: 3.5rem;
    min-height: 3.5rem;
    position: relative;
    z-index: 10;
    justify-content: space-between;

    @media (max-width: 480px) {
        flex-direction: column;
    }
`;

export const StyledCopyrightIcon = styled(Copyright)`
    margin-right: 0.5rem;
`;

export const Text = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% - 24rem);

    @media (max-width: 480px) {
        width: 100%;
        font-size: 1.3rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
    }
`;

export const SocialsWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 0.25rem;
    width: 12rem;
    min-width: 12rem;
    margin-right: 0.5rem;
    justify-content: space-around;

    @media (max-width: 480px) {
        gap: 0rem;
        right: 0rem;
    }
`;

export const StyledIcon = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: ${({ rad }) => (rad ? '100%' : '0%')};

    &:hover {
        filter: brightness(150%);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 2rem;
        height: 2rem;
    }
`;

export const StyledIconButton = styled(IconButton)`
    &.MuiIconButton-root {
        padding: 0.6rem;
    }

    @media (max-width: 480px) {
        &.MuiIconButton-root {
            margin-left: 0.5rem;
        }
    }
`;
