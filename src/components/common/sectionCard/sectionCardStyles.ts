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

    @media (max-width: 480px) {
        padding: 0.25rem 0.25rem 0.5rem 0.25rem;
    }
`;

export const SectionTitle = styled.div<{ $length: number }>`
    font-weight: 500;
    font-style: italic;
    text-align: center;
    font-family: var(--fancy-font);
    font-size: var(--header-big);

    @media (max-width: 480px) {
        width: 100%;
        font-size: var(--header-small);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 2.2rem;
    }
`;

export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('/customAssets/border.svg') center no-repeat;
    background-size: contain;
    height: 100%;
    width: 100%;
    filter: drop-shadow(0px 0px 2.5px var(--primary-gold-color));

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 90%;
        width: 90%;
    }
`;

export const SectionImage = styled.div<{ $src: string }>`
    background-size: contain;
    width: 70.5%;
    height: 70.5%;
    background-position: center;
    background-repeat: no-repeat;
    filter: drop-shadow(0px 0px 0.25px var(--secondary-white-color));
    background-image: ${({ $src }) => $src && `url(${$src})`};
`;
