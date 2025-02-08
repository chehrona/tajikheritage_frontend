import styled from 'styled-components';

export const ROW_HEIGHT = 100;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    position: relative;
`;

export const TBody = styled.tbody``;

export const TableRow = styled.tr<{ $mid: boolean; $background: string }>`
    position: relative;
    height: ${ROW_HEIGHT}px;
    border-bottom: ${({ $mid }) =>
        $mid ? '1px dashed black' : '1px solid black'};
    background: ${({ $background }) => $background && $background};
`;

export const VerticalTextCell = styled.td`
    text-align: center;
    position: relative;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
    white-space: nowrap;
    width: 2rem;
    height: ${ROW_HEIGHT}px;
    border-right: 1px solid black;
`;

export const YearCell = styled.td`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${ROW_HEIGHT}px;
`;

export const HexagonBox = styled.div`
    position: absolute;
    left: 5.5rem;
    top: ${-ROW_HEIGHT / 6}px;
    transform: translateX(-50%);
    width: 7rem;
    padding-right: 10px;
    height: ${ROW_HEIGHT / 3}px;
    background-color: var(--primary-shadow-color);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: var(--body-text);
    clip-path: polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%);
`;

export const Header = styled.div`
    width: 100%;
    font-family: var(--fancy-font);
    font-size: var(--header-big);
    background-color: red;
    text-align: center;
`;

export const SvgContainer = styled.svg`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
`;
