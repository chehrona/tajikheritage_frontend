import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    height: 4rem;
    width: 7.5rem;
    cursor: pointer;
    position: relative;

    @media (max-width: 480px) {
        width: 3rem;
        margin: 0rem;
    }
`;

export const ButtonText = styled.div`
    color: #ffffff;
    font-size: 1rem;
    padding-right: 0.65rem;
    font-weight: normal;
    font-family: var(--ordinary-font);
    min-width: 5.25rem;
    max-width: 5.25rem;
    text-align: right;

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
    }
`;

export const StyledMenuIcon = styled.div<{ $isMenuShown: boolean }>`
    right: 0rem;
    cursor: pointer;
    position: absolute;
    width: 2.15rem;
    min-width: 2.15rem;
    height: 0.2rem;
    background-color: ${({ $isMenuShown }) =>
        $isMenuShown ? 'transparent' : 'var(--primary-gold-color)'};
    transition: background-color 0.3s ease;
    cursor: pointer;

    &::before,
    &::after {
        left: 0;
        content: '';
        width: 2.15rem;
        position: absolute;
        background-color: var(--primary-gold-color);
        transition: 0.4s all cubic-bezier(1, 0, 0, 1);
        height: ${({ $isMenuShown }) => ($isMenuShown ? '0.25rem' : '0.2rem')};
    }

    &::before {
        transform-origin: center;
        transform: ${({ $isMenuShown }) =>
            $isMenuShown ? 'rotate(45deg)' : 'rotate(0deg)'};
        top: ${({ $isMenuShown }) => ($isMenuShown ? '0' : '-0.5rem')};
    }

    &::after {
        top: ${({ $isMenuShown }) => ($isMenuShown ? '0' : '0.5rem')};
        transform-origin: center;
        transform: ${({ $isMenuShown }) =>
            $isMenuShown ? 'rotate(-45deg)' : 'rotate(0deg)'};
    }
`;
