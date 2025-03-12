import styled, { css } from 'styled-components';

export const SubtitleWrapper = styled.div<{ $reverse?: boolean | null }>`
    display: flex;
    align-items: center;
    position: relative;
    padding: var(--text-segment-gap) var(--page-padding);
    padding: ${({ $reverse }) =>
        $reverse === null
            ? 'var(--text-segment-gap) var(--page-padding)'
            : $reverse
            ? 'var(--text-segment-gap) 0rem var(--text-segment-gap) var(--page-padding)'
            : 'var(--text-segment-gap) var(--page-padding) var(--text-segment-gap) 0rem'};
`;

const LineWrapper = styled.div`
    z-index: 1;
    flex-grow: 1;
    align-items: center;
    display: flex;
`;

export const RightWrapper = styled(LineWrapper)`
    margin-left: -0.25rem;
`;

export const LeftWrapper = styled(LineWrapper)<{
    $show?: boolean;
}>`
    margin-right: -0.25rem;
    display: ${({ $show }) => ($show ? 'flex' : 'none')};
`;

export const Line = styled.div`
    height: 1px;
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
    display: flex;
    font-weight: 500;
    width: fit-content;
    padding: 0.25rem 1rem;
    text-transform: uppercase;
    font-size: var(--header-small);
    border-radius: var(--big-radius);
    box-shadow: var(--primary-box-shadow) var(--primary-shadow-color);

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
    }
`;
