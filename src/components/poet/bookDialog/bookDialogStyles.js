import styled from 'styled-components';
import { DialogContent, Button } from '@mui/material';

export const Desc = styled.div`
    width: 100%;
    height: 100%;
    color: #0f0a00;
    line-height: 1.5rem;
    text-align: center;

    @media (max-width: 480px) {
        font-size: 1.3rem;
        line-height: 2rem;
    }
`;

export const StyledContent = styled(DialogContent)`
    position: relative;

    &.MuiDialogContent-root {
        padding: 0.5rem;
    }
`;

export const InfoContainer = styled.div`
    height: 100%;
    width: 100%;
`;

export const InfoTitle = styled.div`
    color: #000000;
    display: flex;
    justify-content: center;
    font-style: italic;
    font-size: 2rem;
    font-family: 'EB Garamond', serif;

    @media (max-width: 480px) {
        font-size: 2.5rem;
    }
`;

export const BodyContainer = styled.div`
    margin: 1rem 0.5rem 0.5rem 0.5rem;
`;

export const InputWrapper = styled.div`
    display: flex;
    margin: 1rem 0rem 0.25rem 0rem;
`;

export const InputField = styled.input`
    background: transparent;
    border: 0.0625rem solid #0f0a00;
    outline: none;
    width: 100%;
    font-size: 1.1rem;
    border-radius: 0.25rem;
    font-family: 'IBM Plex Serif', serif;
    padding: 0.5rem;
`;

export const StyledButton = styled(Button)`
    &.MuiButton-root {
        background: #504221d1;
        color: #fcf6e9;
        height: 100%;
        text-transform: none;
        font-size: 1.1rem;
        font-family: 'IBM Plex Serif', serif;
        margin-left: 1rem;
        padding: 0.375rem 0.75rem;
        box-shadow: 0rem 0rem 0.25rem 0.01rem #504221;
    }

    &.MuiButton-root:hover {
        background: #504221d1;
    }
`;

export const Error = styled.div`
    font-size: 1rem;
    color: ${({ error, success }) =>
        error ? '#ad0f0e' : success && '#297309'};
    height: 1.75rem;
`;
