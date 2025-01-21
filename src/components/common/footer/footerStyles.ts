import styled from 'styled-components';
import { Copyright } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
    width: 100%;
    height: var(--footer-height);
    min-height: var(--footer-height);
    background: var(--primary-black-color);

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
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    color: var(--secondary-grey-color);
    justify-content: space-between;
    background-image: url('/customAssets/error-grid-1.png');
    background-size: calc(100vw / 4);
    background-repeat: repeat;
    background-position: center;

    @media (max-width: 480px) {
        flex-direction: column-reverse;
        justify-content: center;
        max-height: var(--footer-height);
        min-height: var(--footer-height);
        padding: 0.25rem 0.5rem 0.5rem 0.5rem;
        width: fit-content;
    }
`;

export const InfoContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: calc(3rem + var(--header-padding));
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    z-index: 2;
`;

export const StyledCopyrightIcon = styled(Copyright)`
    margin-right: 0.25rem;
`;

export const Text = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0.5rem 0rem;
    border-top: 0.5px solid var(--primary-gold-color);
    font-size: var(--info-text);

    @media (max-width: 480px) {
        margin: 0rem;
    }
`;

export const SocialsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 14rem;
`;

export const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 14rem;
    font-size: var(--body-text);
    height: 100%;
    gap: 1rem;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    height: 2.5rem;
    display: flex;
    align-items: center;
    color: var(--secondary-grey-color);
`;

export const Title = styled.div`
    font-size: var(--header-normal);
    text-transform: uppercase;
    color: var(--primary-gold-color);
    font-family: var(--fancy-font);
    margin-bottom: 1rem;
`;

export const SocialsWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 0.15rem;
    width: 12rem;
    min-width: 12rem;
    justify-content: flex-start;
    margin-left: -0.65rem;

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
    width: 1.25rem;
    height: 1.25rem;
    border-radius: ${({ $rad }) => ($rad ? '100%' : '0%')};

    &:hover {
        filter: brightness(150%);
    }

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
