import styled from 'styled-components';

export const TitleWrapper = styled.div`
    font-size: var(--header-huge);
    font-weight: 500;
    font-style: italic;
    font-family: var(--fancy-font);
    color: var(--regular-black-color);
    text-shadow: 0.0625rem 0.0625rem 0.0875rem var(--primary-black-color);

    // Done
    @media (max-width: 480px) {
        font-size: var(--header-large);
        line-height: var(--header-large-line-height);
        padding: 0rem var(--page-padding);
    }
`;
