import styled from 'styled-components';

export const PageContainer = styled.div`
    box-sizing: border-box;
    background-color: var(--primary-black-color);
    overflow: hidden;
    min-height: calc(100svh - var(--header-height));

    @media (max-width: 480px) {
        min-height: calc(100svh - var(--header-height));
    }
`;

export const InnerContainer = styled.div`
    height: 100%;
    display: flex;
    background: linear-gradient(
        90deg,
        rgba(189, 157, 82, 0.05),
        rgba(189, 157, 82, 0.07),
        rgba(189, 157, 82, 0.09),
        rgba(189, 157, 82, 0.11)
    );
    position: relative;
`;

export const ImageBallWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0rem;
`;
