import styled, { css } from 'styled-components';

export const EmptyDiv = styled.div``;

export const StyledSpan = styled.span`
    .quoteContainer {
        margin: 1rem;
        display: flex;
        justify-content: center;
        position: relative;
    }

    .quoteInnerBox {
        position: relative;
        display: flex;
        padding: 0rem 1rem;
        width: fit-content;
    }

    .quoteSymbol {
        background-image: url('/quotation.png');
        background-size: 100%;
        background-repeat: no-repeat;
        height: 7rem;
        width: 7rem;
        filter: opacity(0.35);
        position: absolute;
        left: 1rem;
        top: 0rem;
    }

    .quoteWrapper {
        margin: 1rem 0rem 0rem 3rem;
        font-style: italic;
        font-size: 1.2rem;
    }

    .termSpan {
        font-weight: bold;
        color: var(--primary-gold-color);
    }

    sup,
    sub {
        vertical-align: baseline;
        position: relative;
        top: -0.5rem;
        color: var(--secondary-gold-color);
        font-size: 0.75rem;
        font-style: normal;
        font-family: var(--ordinary-font);
    }

    sub {
        top: 0.4rem;
    }

    .emptyLine {
        height: 2rem;
        width: 100%;
    }

    .space {
        height: 0.5rem;
        width: 100%;
    }

    @media screen and (max-width: 480px) {
        .quoteInnerBox {
            display: block;
        }

        .quoteWrapper {
            margin: 1.3rem -1rem 0rem 0rem;
            font-size: 1.45rem;
        }

        .quoteSymbol {
            left: -1rem;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        .quoteInnerBox {
            display: block;
        }

        .quoteWrapper {
            margin: 1.3rem 0rem 1rem 1.5rem;
            font-size: 1.45rem;
        }

        .quoteSymbol {
            height: 6rem;
            width: 6rem;
        }
    }
`;

export const SoundBox = styled.div`
    display: flex;
    align-items: center;
    padding: 0rem 0rem 0.75rem 0rem;
`;

export const TableImage = styled.img<{ $expanded: boolean }>`
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
