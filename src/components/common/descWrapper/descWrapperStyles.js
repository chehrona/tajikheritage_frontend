import styled from "styled-components";

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
        margin: 0 auto;
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
    };

    .quoteWrapper {
        margin: 1rem 0rem 0rem 3rem;
        font-style: italic;
        font-size: 1.2rem;
    }

    .termSpan {
        font-weight: bold;
        color: #bd9d52;
    };

    sup, sub {
        vertical-align: baseline;
        position: relative;
        top: -0.5rem;
        color: #92793f;
        font-size: 0.75rem;
        font-style: normal;
        font-family: "IBM Plex Serif", serif;
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
        .quoteContainer > div {
            width: 100%;
        }

        .quoteContainer {
            margin: 1rem 0rem;
        }

        .quoteWrapper {
            margin: 1.3rem 1rem 1rem 1.5rem;
            font-size: 1.45rem;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        .quoteWrapper {
            margin: 1.3rem 0rem 1rem 1.5rem;
            font-size: 1.45rem;
        }

        .quoteContainer {
            margin: 1rem 0rem;
        }

        .quoteContainer > div {
            width: 100%;
        }

        .quoteSymbol {
            height: 6rem;
            width: 6rem;
        };
    }
`;