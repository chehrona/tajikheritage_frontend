import styled, { css } from 'styled-components';
import { StyledSpan } from '../../common/descWrapper/descWrapperStyles';

// Types
import { TableImageProps } from './types/styleTypes';

export const TextBoxWrapper = styled.div`
    padding: 0.5rem 3rem;
    font-size: 1.1rem;

    @media (max-width: 480px) {
        font-size: 1.3rem;
        padding: 0.5rem 1.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
        padding: 0.5rem 2rem;
    }
`;

export const WordDesc = styled(StyledSpan)`
    margin: 0.35rem 0rem;
`;

export const TableImage = styled.img<TableImageProps>`
    margin: 0.5rem 0rem;
    transition: 0.3s ease-in-out;
    ${({ $expanded }) =>
        $expanded
            ? css`
                  height: 100svh;
                  border-radius: 1rem;
                  cursor: zoom-in;
              `
            : css`
                  height: 40svh;
                  border-radius: 0.75rem;
                  cursor: zoom-out;
              `};

    @media (max-width: 480px) {
        width: 100%;
        height: auto;
        margin: 0.5rem 0rem 0rem 0rem;
        font-size: 1.35rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: auto;
        width: ${({ $expanded }) => ($expanded ? '100%' : '50%')};
    }
`;

export const SoundBox = styled.div`
    display: flex;
    align-items: center;
    padding: 0rem 0rem 0.75rem 0rem;
`;
