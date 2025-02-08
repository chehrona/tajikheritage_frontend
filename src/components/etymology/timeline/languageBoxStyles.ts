import styled, { css } from 'styled-components';
import { ROW_HEIGHT } from './timelineStyles';

export const BOX_WIDTH = 208;
export const GAP_WIDTH = 10;
export const BOX_HEIGHT = ROW_HEIGHT / 2.5;

export const MainContainer = styled.div<{
    $x: number;
    $y: number;
    $empty: boolean;
}>`
    position: absolute;
    left: ${({ $x }) => `${$x}px`};
    top: ${({ $y }) => `${$y}px`}; /* Fixed missing top positioning */
    transform: translateY(-50%);
    width: ${BOX_WIDTH}px;
    height: ${BOX_HEIGHT}px;
    min-width: ${BOX_WIDTH}px;
    padding: 0.25rem;
    display: flex; /* Removed invalid single quotes */
    justify-content: center;
    align-items: center;

    ${({ $empty }) =>
        $empty
            ? css`
                  background: transparent;
                  opacity: 0.5;
              `
            : css`
                  background: var(--primary-white-color);
                  color: var(--primary-black-color);
                  border: 1px solid var(--primary-white-color);
                  border-radius: var(--input-radius);
                  box-shadow: var(--primary-box-shadow)
                      var(--primary-shadow-color);
              `};
`;

export const TextContainer = styled.div<{
    $empty: boolean;
}>`
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ $empty }) =>
        $empty
            ? css`
                  width: 10px;
                  height: 10px;
                  border-radius: 50%;
                  background-color: green;
              `
            : css`
                  width: 100%;
                  height: 100%;
              `};
`;

export const BoxText = styled.div``;
