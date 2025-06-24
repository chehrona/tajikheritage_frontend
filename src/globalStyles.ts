import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    ul {
        margin-top: var(--text-segment-gap);
        margin-bottom: var(--text-segment-gap);
    }

    .quoteContainer {
        display: flex;
        justify-content: center;
        position: relative;
        min-height: 7rem;
        padding: var(--text-segment-gap);
    }

    .quoteInnerBox {
        position: relative;
        display: flex;
        width: fit-content;
        padding: var(--text-segment-gap) 0rem 0rem var(--text-segment-gap);
        gap: calc(2 * var(--text-segment-gap));
    }

    .quoteInnerBox::before {
        content: '';
        background-image: url('/customAssets/quotation.svg');
        background-size: 100%;
        background-repeat: no-repeat;
        height: 7rem;
        width: 7rem;
        opacity: 0.3;
        position: absolute;
        left: 0rem;
        top: 0rem;
        z-index: 1;
    }

    .quoteWrapper {
        position: relative;
        z-index: 2;
        font-size: var(--header-small);
        padding: var(--text-segment-gap) 0rem 0rem var(--text-segment-gap);
    }

    .persianWrapper {
        direction: rtl;
        text-align: right;
        width: fit-content;
        padding: 0rem 0rem calc(var(--text-segment-gap) / 2) calc(6 * var(--text-segment-gap));
    }

    .storyWrapper {
        justify-content: center;
        position: relative;
        padding: var(--text-segment-gap);
    }

    .storyWrapper::first-letter {
        font-family: var(--carmen-font);
        font-size: calc(1.25 * var(--header-large));
        color: var(--primary-gold-color);
    }

    .convoWrapper {
        width: 100%;
        justify-content: center;
        position: relative;
        padding: var(--text-segment-gap);
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

    .imbeddedLink {
        color: var(--primary-shadow-color);

        :link, :visited, :active {
            color: var(--primary-shadow-color);
        }
    }

    @media screen and (max-width: 480px) {
        .quoteInnerBox {
            display: block;
            padding: 0rem;
            width: 100%;
        }

        .quoteInnerBox::before {
            height: 6rem;
            width: 6rem;
            position: absolute;
            left: 0rem;
            top: 0rem;
        }

        .quoteWrapper {
            padding: var(--page-padding) 0rem 0rem var(--page-padding);
        }

        .storyWrapper {
            justify-content: center;
            position: relative;
        }

        .storyWrapper::first-letter {
            font-family: var(--carmen-font);
            font-size: calc(1.25 * var(--header-big));
            color: var(--primary-gold-color);
        }

        .convoWrapper {
            justify-content: center;
            position: relative;
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
    }
`;

export default GlobalStyles;
