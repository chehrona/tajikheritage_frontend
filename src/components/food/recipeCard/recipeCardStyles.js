import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const slideOut = keyframes`
    0% {
        transform: translateX(100%);
        opacity: 0;
    }
    50% {
        transform: translateX(0);
        opacity: 1;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

export const RecipeCardWrapper = styled.div`
    opacity: 0;
    color: var(--primary-black-color);
    cursor: pointer;
    position: relative;
    animation: ${slideOut} 1s ease-in-out forwards;
    animation-delay: ${({ delay }) => (delay ? delay : '0s')};
`;

export const RecipeNameBox = styled.div`
    display: flex;
    font-size: 2rem;
    margin-top: 0.5rem;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 480px) {
        margin-top: 0rem;
    }
`;

export const StyledIconButton = styled(IconButton)`
    width: 2.5rem;
    height: 2.5rem;
    margin-top: -0.1rem;

    &.MuiIconButton-root {
        margin-left: 0.3rem;
    }

    &:hover {
        color: #59a959;
    }

    @media (max-width: 480px) {
        &.MuiIconButton-root {
            color: #59a959;
        }
    }
`;

export const RecipeInfo = styled.div`
    display: flex;
    align-items: center;
    font-weight: 500;
    font-style: italic;
    font-family: var(--fancy-font);
`;

export const RecipeSubtitle = styled.div`
    font-size: var(--body-text);

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
    }
`;

export const RecipeImage = styled.img`
    height: 35rem;
    width: 23rem;
    border-radius: 0.7rem;
    transition: border-radius 250ms, box-shadow 400ms;

    &:hover {
        border-radius: 1.5rem;
        box-shadow: 0rem 0rem 0.6rem var(--primary-shadow-color);
        transition: border-radius 250ms, box-shadow 400ms;
    }

    @media (max-width: 480px) {
        height: 19.025rem;
        width: 12.5rem;
        box-shadow: 0rem 0rem 0.6rem var(--primary-shadow-color);

        &:hover {
            border-radius: 0.7rem;
        }
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;
