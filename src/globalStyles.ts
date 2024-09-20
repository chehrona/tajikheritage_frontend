import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
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
        margin: 1rem 0rem 0rem var(--page-padding);
        font-style: italic;
        font-size: var(--header-small);
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
        font-size: calc(var(--body-text) * 0.75);
        font-style: normal;
        font-family: var(--regular-font);
    }

    sup.lightSup {
        color: var(--secondary-gold-color);
    }

    sup.darkSup {
        color: var(--primary-gold-color);
    }

    .emptyLine {
        height: var(--text-segment-gap);
        width: 100%;
    }

    .space {
        height: calc(var(--text-segment-gap) / 2);
        width: 100%;
    }

    @media screen and (max-width: 480px) {
        .quoteContainer {
            margin: 0.75rem 0rem 1rem 0.5rem;
        }

        .quoteInnerBox {
            display: block;
        }

        .quoteWrapper {
            margin: 1rem -1rem 0rem 0rem;
            font-size: var(--header-small);
        }

        .quoteSymbol {
            left: -0.75rem;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        .quoteInnerBox {
            display: block;
        }

        .quoteWrapper {
            margin: 1.3rem 0rem 1rem var(--page-padding);
            font-size: 1.45rem;
        }

        .quoteSymbol {
            height: 6rem;
            width: 6rem;
        }
    }
`;

export default GlobalStyles;
