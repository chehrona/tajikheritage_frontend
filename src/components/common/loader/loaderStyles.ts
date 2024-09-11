import styled from 'styled-components';
import { LandingContainer } from '../pageWrapper/pageWrapperStyles';

export const LoaderContainer = styled(LandingContainer)`
    background: var(--primary-black-color) url('/loader.png') center no-repeat;
    background-size: 15rem 15rem;
    padding: 0rem;

    @media (max-width: 480px) {
        background-size: 10rem 10rem;
    }
`;
