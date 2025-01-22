import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    .quoteContainer {
        margin: var(--text-segment-gap);
        display: flex;
        justify-content: center;
        position: relative;
        min-height: 6rem;
    }

    .quoteInnerBox {
        position: relative;
        display: flex;
        width: fit-content;
    }

    .quoteInnerBox::before {
        content: '';
        background-image: url('/customAssets/quotation.png');
        background-size: 100%;
        background-repeat: no-repeat;
        height: 7rem;
        width: 7rem;
        opacity: 0.4;
        position: absolute;
        left: 1rem;
        top: 0rem;
        z-index: 1;
    }

    .quoteWrapper {
        margin: calc(2 * var(--text-segment-gap)) var(--page-padding) var(--text-segment-gap) calc(2 * var(--text-segment-gap));
        position: relative;
        z-index: 2;
    }

    .storyWrapper {
        margin: calc(2 * var(--text-segment-gap));
        justify-content: center;
        position: relative;
    }

    .storyWrapper::first-letter {
        font-family: var(--carmen-font);
        font-size: calc(1.25 * var(--header-large));
        color: var(--primary-gold-color);
    }

    .convoWrapper {
        width: 100%;
        margin: calc(2 * var(--text-segment-gap));
        justify-content: center;
        position: relative;
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
        .quoteContainer {
            margin: var(--text-segment-gap) 0rem;
        }

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
            margin-top: calc(2 * var(--text-segment-gap));
        }

        .storyWrapper {
            margin-top: calc(2 * var(--text-segment-gap));
            justify-content: center;
            position: relative;
        }

        .storyWrapper::first-letter {
            font-family: var(--carmen-font);
            font-size: calc(1.25 * var(--header-big));
            color: var(--primary-gold-color);
        }

        .convoWrapper {
            margin: var(--text-segment-gap);
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
