import styled from 'styled-components';

export const SubtitleWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const LineWrapper = styled.div<{ $right: boolean }>`
    display: flex;
    z-index: 1;
    flex-grow: 1;
    align-items: center;
    ${({ $right }) =>
        $right ? 'margin-right: -0.25rem' : 'margin-left: -0.25rem'};
`;

export const Line = styled.div`
    height: 0.0625rem;
    width: 100%;
    background-color: var(--primary-gold-color);
`;

export const Circle = styled.div`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: var(--primary-gold-color);
`;

export const Subtitle = styled.span`
    font-weight: 500;
    font-size: 1.15rem;
    width: fit-content;
    padding-right: 0.25rem;
    text-transform: uppercase;
    padding: 0.25rem 1rem;
    border-radius: 1rem;
    box-shadow: 0rem 0rem 0.3rem 0rem var(--primary-shadow-color);
    display: flex;

    @media (max-width: 480px) {
        font-size: 1.35rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
    }
`;
