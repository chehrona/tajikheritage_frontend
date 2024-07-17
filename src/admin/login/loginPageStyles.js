import { Button } from '@mui/material';
import styled from 'styled-components';

export const PageContainer = styled.div`
    box-sizing: border-box;
    min-height: 100svh;
    background: white;
    display: flex;
    justify-content: center;
    padding-top: 20%;
`;

export const LoginContainer = styled.div`
    width: 20rem;
    height: 14rem;
    background: #fcf6e9;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    padding: 1rem;
    box-shadow: 0rem 0rem 0.3rem 0rem #0f0a00;
`;

export const UsernameField = styled.input`
    width: 100%;
    height: 2.5rem;
    outline: none;
    border: 1px solid #0f0a00;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-family: 'IBM Plex Serif', serif;
    padding: 0rem 0.5rem;
`;

export const PasswordField = styled.input`
    width: 100%;
    height: 2.5rem;
    outline: none;
    border: 1px solid #0f0a00;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-family: 'IBM Plex Serif', serif;
    padding: 0rem 0.5rem;
    margin-top: 0.5rem;
`;

export const SubmitButton = styled(Button)`
    &.MuiButton-root {
        margin-top: 1rem;
        background: #504221d1;
        color: #fcf6e9;
        height: 2rem;
        text-transform: none;
        font-size: 1rem;
        font-family: 'IBM Plex Serif', serif;
        margin-left: 1rem;
        padding: 0.375rem 0.75rem;
        box-shadow: 0rem 0rem 0.25rem 0.01rem #504221;
    }

    &.MuiButton-root:hover {
        background: #504221d1;
    }
`;

export const InputAlert = styled.div`
    color: #ad0f0e;
    height: 1.5rem;
    margin: 0.35rem 0rem 0rem -2.75rem;
`;
