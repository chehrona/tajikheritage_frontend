import styled, { css } from 'styled-components';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.div`
    width: 17rem;
    height: 2.5rem;
    margin-right: 0rem;
    margin-left: 0.3rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('/end_arrow.png');

    ${({ right }) =>
        !right &&
        css`
            margin-right: 0.3rem;
            margin-left: 0rem;
            transform: rotateY(180deg);
        `}

    @media (max-width: 480px) {
        width: 15rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 15rem;
        height: 3rem;
    }
`;

export const StyledDownIcon = styled(ExpandMore)`
    color: #70654a;
`;

export const StyledUpIcon = styled(ExpandLess)`
    color: #70654a;
`;
