import styled from 'styled-components';

export const SectionCardWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--primary-white-color);
    background: var(--primary-black-color);
`;

export const SectionTitle = styled.div<{ $length: number }>`
    font-size: 2rem;
    font-weight: 500;
    font-family: 'EB Garamond', serif;
    font-style: italic;
    text-align: center;
    margin-bottom: 1rem;
    line-height: ${({ $length }) => $length > 20 && '2.05rem'};

    @media (max-width: 480px) {
        font-size: 1.3rem;
        margin-bottom: 0.25rem;
        line-height: ${({ $length }) => $length > 20 && '1.3rem'};
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 2.2rem;
    }
`;

export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('/border.png') center no-repeat;
    background-size: contain;
    height: 100%;
    width: 100%;
    filter: drop-shadow(0px 0px 2.5px var(--primary-gold-color));

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 90%;
        width: 90%;
    }
`;

export const SectionImage = styled.div<{ src: string }>`
    background-size: contain;
    width: 80%;
    height: 80%;
    background-position: center;
    background-repeat: no-repeat;
    filter: drop-shadow(0px 0px 1px var(--secondary-white-color));
    background-image: ${({ src }) => src && `url(${src})`};
`;
