import styled, { css } from 'styled-components';
import { BOX_WIDTH, BOX_HEIGHT } from './data';

export const MainContainer = styled.div<{
    $x: number;
    $y: number;
    $empty: boolean;
}>`
    position: absolute;
    left: ${({ $x }) => `${$x}px`};
    /* opacity: 0.5; */
    top: ${({ $y }) => `${$y}px`};
    transform: translateY(-50%);
    width: ${BOX_WIDTH}px;
    height: ${BOX_HEIGHT}px;
    min-width: ${BOX_WIDTH}px;
    padding: 0.25rem;
    display: flex;
    opacity: 0.5;
    justify-content: center;
    align-items: center;

    ${({ $empty }) =>
        $empty
            ? css`
                  background: transparent;
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

const Node = styled.div`
    position: absolute;
    background-color: var(--primary-red-color);
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    z-index: 10;
`;

export const RightNode = styled(Node)`
    top: 50%;
    transform: translateY(-50%);
    right: -0.3rem;
`;

export const LeftNode = styled(Node)`
    top: 50%;
    transform: translateY(-50%);
    left: -0.3rem;
`;

export const TopNode = styled(Node)`
    left: 50%;
    transform: translateX(-50%);
    top: -0.3rem;
`;

export const BottomNode = styled(Node)`
    left: 50%;
    transform: translateX(-50%);
    bottom: -0.3rem;
`;
