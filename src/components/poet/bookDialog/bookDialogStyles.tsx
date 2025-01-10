import styled from 'styled-components';

// Types
import { ErrorStyleProps } from './types/styleTypes';

export const DialogBodyContainer = styled.div`
    height: 100%;
    width: 100%;
    font-size: var(--body-text);

    @media (max-width: 480px) {
        line-height: var(--body-text-line-height);
    }
`;

export const DialogTitle = styled.div<{ $textColor: string }>`
    color: ${({ $textColor }) =>
        $textColor === 'light'
            ? 'var(--regular-white-color)'
            : 'var(--regular-black-color)'};
    display: flex;
    justify-content: center;
    font-style: italic;
    font-size: var(--header-large);
    line-height: var(--header-large-line-height);
    font-family: var(--fancy-font);
    padding: var(--text-segment-gap) var(--page-padding);
    margin-right: var(--page-padding);

    @media (max-width: 480px) {
        margin-right: calc(2 * var(--page-padding));
        text-align: center;
        font-size: var(--header-big);
        line-height: var(--header-big-line-height);
    }
`;

export const BodyContainer = styled.div`
    padding: 0rem calc(var(--page-padding) / 2)
        calc(2.5 * var(--text-segment-gap)) calc(var(--page-padding) / 2);

    @media (max-width: 480px) {
        padding: 0rem var(--page-padding) calc(2.5 * var(--text-segment-gap))
            var(--page-padding);
    }
`;

export const Desc = styled.div`
    width: 100%;
    height: 100%;
    color: var(--primary-black-color);
    text-align: center;
`;

export const InputWrapper = styled.div`
    display: flex;
    margin: var(--text-segment-gap) 0rem 0rem 0rem;
    align-items: center;
    justify-content: center;
    gap: var(--text-segment-gap);
`;

export const InputField = styled.input`
    background: transparent;
    border: 1px solid var(--primary-black-color);
    outline: none;
    width: 100%;
    font-size: var(--body-text);
    border-radius: var(--input-radius);
    font-family: var(--regular-font);
    padding: 0.5rem;
`;

export const Error = styled.div<ErrorStyleProps>`
    font-size: var(--info-text);
    line-height: var(--body-text-line-height);
    color: ${({ $error, $success }) =>
        $error ? 'var(--primary-red-color)' : $success && '#297309'};
    height: 1.75rem;
`;
