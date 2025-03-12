import styled from 'styled-components';

export const TempPageContainer = styled.div`
    min-height: 100svh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TempImg = styled.img`
    height: 20rem;
`;

export const TempTitle = styled.div`
    color: var(--primary-white-color);
    margin: 0% 0% 5% 0%;
    font-size: var(--header-medium);
    position: absolute;
    top: 10%;
    z-index: 10;
    font-family: var(--fancy-font);
`;
