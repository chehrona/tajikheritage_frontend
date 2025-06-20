import styled from 'styled-components';

export const MainContainer = styled.div`
    width: '100%';
    height: 30rem;
    justify-content: center;
    align-items: center;
    background-color: red;
    padding: var(--text-segment-gap) 0rem 0rem 0rem;
`;

export const Line = styled.div`
    width: '100%';
    height: 1px;
`;

export const StyledFrame = styled.iframe`
    width: auto;
    /* height: 100%; */
    outline: none;
    border: none;
`;
