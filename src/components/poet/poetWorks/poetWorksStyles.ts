import styled from 'styled-components';

export const MainContainer = styled.div`
    background: var(--primary-black-color);
    color: var(--regular-white-color);
    position: relative;
    background-image: url(${'/noise.png'});
    padding: 6rem 0rem 9rem 0rem;

    &:before {
        content: '';
        padding: 3rem;
        width: 100%;
        background: var(--primary-white-color);
        background-image: url(${'/noise.png'});
        -webkit-clip-path: polygon(-10px 0px, 100% 0%, 100% 0%, 0% 100%);
        clip-path: polygon(-10px 0px, 100% 0%, 100% 0%, 0% 100%);
        position: absolute;
        top: -0.01rem;
        box-sizing: border-box;
    }

    @media (max-width: 480px) {
        padding: 0rem 0rem 6rem 0rem;
        margin-top: -1rem;

        &:before {
            display: none;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding-top: 1rem;
        margin-top: -1rem;

        &:before {
            display: none;
        }
    }
`;
