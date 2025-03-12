import styled from 'styled-components';
import { Face } from '../../../poet/poetAwards/poetAwardStyles';

export const MainContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: var(--text-segment-gap);
`;

export const InputWrapper = styled.div`
    height: 3.5rem;
    width: 20rem;
    background: url('/customAssets/mulchar.png') center no-repeat;
    background-size: contain;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: var(--text-segment-gap);

    @media (max-width: 480px) {
        /* width: 100%;
        height: 3rem; */
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        /* width: 35rem;
        height: 4rem; */
    }
`;

export const InputField = styled.input`
    outline: none;
    border: none;
    width: 12rem;
    height: 3.4rem;
    font-size: var(--header-small);
    background-color: transparent;
    font-family: var(--regular-font);
`;

export const CardWrapper = styled.div`
    width: 15rem;
    height: 18rem;
    display: flex;
    justify-content: center;
    align-items: start;
    background-color: transparent;
    perspective: 62.5rem;
    border-radius: var(--small-radius);
    box-shadow: var(--primary-box-shadow) var(--primary-shadow-color);
    margin-top: var(--text-segment-gap);

    @media (max-width: 480px) {
        width: var(--small-card-width);
        height: var(--small-card-height);
    }
`;

export const CardInnerContainer = styled.div<{ $flip: boolean }>`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transform: ${({ $flip }) => ($flip ? 'rotateY(180deg)' : 'rotateY(0deg)')};
    transition: transform 0.8s;
    transform-style: preserve-3d;
`;

export const CardFace = styled(Face)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(${'/customAssets/noise.png'});
    background-color: var(--primary-black-color);
    padding: var(--text-segment-gap);
`;

export const CardTitle = styled.div`
    width: 100%;
    padding-bottom: var(--text-segment-gap);
    font-size: var(--header-normal);
    color: var(--primary-white-color);
    font-weight: 500;
`;

export const NoSignWrapper = styled.div`
    font-size: 5rem;
    color: var(--primary-white-color);
`;

export const SignImage = styled.img`
    width: 100%;
    height: 100%;
`;
