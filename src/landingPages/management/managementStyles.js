import styled from 'styled-components';

export const MainContainer = styled.div`
    box-sizing: border-box;
    min-height: 100svh;
    display: flex;
`;

export const LeftPanel = styled.div`
    width: 25%;
    height: 100svh;
    padding: 1rem 0.5rem;
    display: flex;
    flex-direction: column;
    background-color: #424040;
`;

export const PageWrapper = styled.div`
    margin-bottom: 0.5rem;
`;

export const PageName = styled.div`
    width: 100%;
    height: 2rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    color: #fcf6e9;
    background-color: #0f0a00;
`;

export const DropdownContent = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin-top: 0.25rem;
    border-radius: 0.5rem;
    background-color: #f9f9f9;
    transition: all 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
    padding: ${({ isOpen }) => (isOpen ? '0.5rem' : '0rem')};
    gap: 0.25rem;
`;
export const SectionTitle = styled.div`
    cursor: pointer;
    padding: 0.5rem;
`;

export const RightPanel = styled.div`
    width: 75%;
    background-color: #f9f9f9;
    padding: 2rem;
`;

export const SectionContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 2rem;
    margin-bottom: 1rem;
`;

export const EditableInput = styled.input`
    width: 20rem;
    height: 2rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    outline: none;
    margin-bottom: 0.5rem;
    font-family: 'IBM Plex Serif', serif;
    border: ${({ file }) => (file ? 'none' : '1px solid #bd9d52')};
    padding: ${({ file }) => (file ? '0rem' : '0rem 0.25rem')};
`;

export const InputWrapper = styled.div``;

export const Label = styled.div`
    margin-bottom: 0.25rem;
    font-weight: bold;
`;
