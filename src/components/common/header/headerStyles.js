import styled from 'styled-components';
import { Close, Menu as MenuIcon } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    background: #0f0a00;
    width: 100%;
`;

export const HeaderInnerBox = styled.div`
    background: #0f0a00;
    height: 5rem;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    color: #ffffff;
    position: relative;
    z-index: 11;
    max-width: 1920px;
    margin: 0 auto;
    justify-content: space-between;
    padding: 0rem 0.25rem 0rem 1rem;
    overflow: hidden;

    @media (max-width: 480px) {
        height: 4.5rem;
        padding: 0rem 0.25rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding-left: 0.85rem;
    }
`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 4rem;

    @media (max-width: 480px) {
        height: 3.5rem;
        width: 3.5rem;
        margin-left: 0.25rem;
        margin-right: 0.25rem;
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-family: 'EB Garamond', serif;
    position: absolute;
    left: 5rem;
    top: 0rem;
    width: calc(100% - 12.5rem);
    text-align: center;
    transition: 0.5s all;
    transform: ${({ transform }) =>
        transform && `translateY(${(-100 / 3) * transform}%)`};

    @media (max-width: 480px) {
        font-size: 1.64rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 2.2rem;
    }
`;

export const Title = styled.div`
    font-style: italic;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 5rem;
`;

export const TitleSpan = styled.span`
    font-style: normal;
    font-weight: bold;
    margin-right: 0.4rem;
    color: #bd9d52;
`;

export const MenuWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    width: fit-content;

    @media (max-width: 480px) {
        width: 3rem;
        margin: 0rem;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    width: 6.5rem;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.5s ease-in-out;
`;

export const ButtonText = styled.div`
    color: #ffffff;
    font-size: 1rem;
    margin-right: -0.25rem;
    font-weight: normal;
    font-family: 'IBM Plex Serif', serif;
`;

export const StyledIconButton = styled(IconButton)`
    display: flex;
    justify-content: center;

    &.MuiIconButton-root {
        padding: 8px 0px;
        width: 3.5rem;
        margin-right: 1.5rem;
    }

    @media (max-width: 480px) {
        &.MuiIconButton-root {
            padding: 8px;
            width: 100%;
            margin: 0rem;
        }
    }
`;

export const StyledMenuIcon = styled(MenuIcon)`
    color: #bd9d52;

    &.MuiSvgIcon-root {
        width: 3.5rem;
        height: 2.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        &.MuiSvgIcon-root {
            width: 4rem;
            height: 3rem;
        }
    }
`;

export const StyledCloseIcon = styled(Close)`
    color: #bd9d52;

    &.MuiSvgIcon-root {
        width: 3.5rem;
        height: 2.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        &.MuiSvgIcon-root {
            width: 4rem;
            height: 3rem;
        }
    }
`;

export const Logo = styled.img`
    height: 100%;
    width: 100%;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;
