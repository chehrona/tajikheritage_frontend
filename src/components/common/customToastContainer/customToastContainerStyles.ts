import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const StyledContainer = styled(ToastContainer)`
    &&&.Toastify__toast-container {
        padding: 0rem;
        right: 0.5rem;
        left: auto;
        top: 0.5rem;
        width: fit-content;

        .Toastify__toast {
            padding: 0.25rem;
            font-size: var(--body-text);
            box-shadow: var(--primary-box-shadow) var(--primary-shadow-color);
            color: var(--secondary-gold-color);
            width: fit-content;
            border-radius: var(--input-radius);
        }

        .Toastify__toast-icon {
            height: 1.5rem;
            width: 1.5rem;
            margin-right: 0.5rem;
        }

        .Toastify__toast--info {
            background-color: var(--primary-blue-color);
        }

        .Toastify__toast--success {
            background-color: var(--primary-shadow-color);
        }

        .Toastify__toast--error {
            background-color: var(--primary-red-color);
        }

        .Toastify__toast-body {
            font-family: var(--regular-font);
        }
    }
`;
