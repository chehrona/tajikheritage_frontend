import styled from 'styled-components';

export const MainContainer = styled.div`
    border-radius: var(--big-radius);
    width: 40rem;
    height: fit-content;
    box-shadow: var(--primary-box-shadow) var(--primary-black-color);
    position: fixed;
    bottom: 0.5rem;
    left: 0.5rem;
    z-index: 10;
    background-color: var(--primary-white-color);
`;

export const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem calc(var(--page-padding) / 2);
`;

export const IconImage = styled.img`
    width: 2rem;
    height: 2rem;
    margin-bottom: 0.25rem;
`;

export const InfoText = styled.span`
    font-size: var(--info-text);
    text-align: center;
`;

export const ButtonWrapper = styled.div`
    height: 2.5rem;
    margin-top: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;
`;
