import styled from 'styled-components';

export const MainContainer = styled.div<{ $height: number }>`
    border-radius: var(--page-radius);
    margin-right: 0.8rem;
    background-image: url(${'/noise.png'});
    background-color: var(--primary-white-color);
    box-shadow: 0.8rem 0.5rem 0rem 0.08rem var(--primary-shadow-color);
    min-height: ${({ $height }) => $height && `${$height}rem`};

    @media (max-width: 480px) {
        margin: 0rem;
        box-shadow: 0rem 0rem 0rem 0rem;
    }
`;
