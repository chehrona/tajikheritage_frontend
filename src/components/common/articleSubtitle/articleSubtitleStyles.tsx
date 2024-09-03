import styled from 'styled-components';

// Types
import { SubtitleProps } from './types/styleTypes';

export const Subtitle = styled.span<SubtitleProps>`
    font-weight: 500;
    font-size: 1.15rem;
    width: fit-content;
    padding-right: 0.25rem;
    text-transform: uppercase;
    border-right: 2px solid #ad0f0e;
    border-bottom: 2px solid #ad0f0e;
    ${({ reverse, length }) => !reverse && length && 'margin-left: 3rem'};

    @media (max-width: 480px) {
        margin: 1rem 0rem 0rem 1.5rem;
        font-size: 1.35rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
        ${({ reverse, length }) => !reverse && length && 'margin-left: 2rem'};
    }
`;
