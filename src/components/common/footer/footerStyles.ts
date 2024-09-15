import styled, { css } from 'styled-components';
import { Copyright } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const FooterContainer = styled.div<{ $show: boolean }>`
    width: 100%;
    height: var(--footer-height);
    min-height: var(--footer-height);
    background: var(--primary-black-color);
    transition: opacity 0.5s ease, display 0.5s ease;
    ${({ $show }) =>
        $show
            ? css`
                  display: block;
                  opacity: 1;
              `
            : css`
                  display: none;
                  opacity: 0;
              `}

    @media (max-width: 480px) {
        justify-content: center;
        align-items: center;
    }
`;

export const FooterInnerContainer = styled.div`
    background: var(--primary-black-color);
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    color: var(--secondary-grey-color);
    max-height: var(--footer-height);
    min-height: var(--footer-height);
    justify-content: space-between;

    @media (max-width: 480px) {
        flex-direction: column-reverse;
        justify-content: center;
        max-height: var(--footer-height);
        min-height: var(--footer-height);
        padding: 0.25rem 0.5rem 0.5rem 0.5rem;
        width: fit-content;
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
    font-size: var(--body-text);

    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const SocialsWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 0.25rem;
    width: 12rem;
    min-width: 12rem;
    justify-content: space-around;

    @media (max-width: 480px) {
        gap: 0rem;
        width: 13rem;
        justify-content: space-between;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 14rem;
        min-width: 14rem;
        margin-right: 0.25rem;
    }
`;

export const StyledIcon = styled.img<{ $rad: boolean }>`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: ${({ $rad }) => ($rad ? '100%' : '0%')};

    &:hover {
        filter: brightness(150%);
    }

    // Done
    @media (max-device-width: 1024px) {
        width: 1.5rem;
        height: 1.5rem;

        &:hover {
            filter: brightness(100%);
        }
    }
`;

export const StyledIconButton = styled(IconButton)`
    &.MuiIconButton-root {
        padding: 0.6rem;
    }
`;
