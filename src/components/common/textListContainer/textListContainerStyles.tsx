import styled from 'styled-components';

export const MainContainer = styled.div<{ $height: number }>`
    border-radius: 4rem;
    background: #fcf6e9;
    margin-right: 0.8rem;
    background-image: url(${'/noise.png'});
    box-shadow: 0.8rem 0.5rem 0rem 0.08rem #504221d1;
    min-height: ${({ $height }) => $height && `${$height}rem`};

    @media (max-width: 480px) {
        margin: 0rem;
        border-radius: 0rem;
        box-shadow: 0rem 0rem 0rem 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        border-radius: 2.5rem;
    }
`;
