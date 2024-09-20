import styled from 'styled-components';

export const LeftTextWrapper = styled.div`
    width: 100%;
    height: 30rem;
    padding: 0rem 2.8rem 3rem 3rem;
    border-bottom: 0.0625rem solid var(--primary-gold-color);
    border-top: 0.0625rem solid var(--primary-gold-color);
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
        scrollbar-width: none;
    }

    @media (max-width: 480px) {
        padding: 0rem 0rem var(--text-segment-gap) 0rem;
        height: auto;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0rem 2rem 2rem 2rem;
        height: auto;
    }
`;

export const ImageContainer = styled.div`
    position: absolute;
    display: flex;
`;

export const ButtonWrapper = styled.div`
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
`;
