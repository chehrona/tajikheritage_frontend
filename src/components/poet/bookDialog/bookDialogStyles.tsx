import styled from 'styled-components';
import { DialogContent, Button } from '@mui/material';

// Types
import { ErrorStyleProps } from './types/styleTypes';

export const StyledContent = styled(DialogContent)`
    position: relative;

    &.MuiDialogContent-root {
    }

    @media (max-width: 480px) {
        &.MuiDialogContent-root {
            padding: 0rem calc(var(--text-segment-gap) / 1.5)
                calc(var(--text-segment-gap) * 2)
                calc(var(--text-segment-gap) / 1.5);
            margin-top: calc(var(--text-segment-gap) * (-2.5));
        }
    }
`;

export const InfoContainer = styled.div`
    height: 100%;
    width: 100%;
`;

export const InfoTitle = styled.div`
    color: var(--regular-black-color);
    display: flex;
    justify-content: center;
    font-style: italic;
    font-size: 2rem;
    font-family: var(--fancy-font);

    @media (max-width: 480px) {
        font-size: var(--header-big);
    }
`;

export const BodyContainer = styled.div`
    margin: 1rem 0.5rem 0.5rem 0.5rem;

    @media (max-width: 480px) {
        margin: calc(var(--text-segment-gap) / 2) 0rem;
    }
`;

export const Desc = styled.div`
    width: 100%;
    height: 100%;
    color: var(--primary-black-color);
    line-height: 1.5rem;
    text-align: center;

    @media (max-width: 480px) {
        font-size: var(--body-text);
        line-height: var(--body-text-line-height);
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    margin: 1rem 0rem 0.25rem 0rem;
    align-items: center;
    justify-content: center;

    @media (max-width: 480px) {
        margin: var(--text-segment-gap) 0rem 0rem 0rem;
        gap: var(--text-segment-gap);
    }
`;

export const InputField = styled.input`
    background: transparent;
    border: 1px solid var(--primary-black-color);
    outline: none;
    width: 100%;
    font-size: var(--body-text);
    border-radius: 0.25rem;
    font-family: var(--ordinary-font);
    padding: 0.5rem;
`;

export const StyledButton = styled(Button)`
    &.MuiButton-root {
        background: var(--primary-shadow-color);
        color: var(--primary-white-color);
        height: 100%;
        text-transform: none;
        font-size: var(--body-text);
        font-family: var(--ordinary-font);
        margin-left: 1rem;
        padding: 0.375rem 0.75rem;
        box-shadow: 0rem 0rem 0.25rem 0.01rem var(--primary-shadow-color);
    }

    &.MuiButton-root:hover {
        background: var(--primary-shadow-color);
    }

    @media (max-width: 480px) {
        &.MuiButton-root {
            padding: 0.375rem 0.95rem;
            margin: 0rem;
        }
    }
`;

export const Error = styled.div<ErrorStyleProps>`
    font-size: 1rem;
    color: ${({ $error, $success }) =>
        $error ? 'var(--primary-red-color)' : $success && '#297309'};
    height: 1.75rem;
`;
