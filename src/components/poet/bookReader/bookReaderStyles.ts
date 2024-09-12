import styled from 'styled-components';
import { Dialog } from '@mui/material';

// Components
import { TitleWrapper } from '../../common/header/headerStyles';

export const MainContainer = styled(Dialog)`
    height: 100%;
    width: 100%;

    & .MuiPaper-root {
        background-color: var(--primary-black-color);
    }
`;

export const StyledFrame = styled.iframe`
    width: 100vw;
    height: 100vh;
    border: none;
    background: var(--primary-grey-color) url('/loader.png') center no-repeat;
    background-size: 20% auto;
`;

export const Title = styled(TitleWrapper)`
    font-size: var(--header-normal);
    font-family: var(--fancy-font);
    max-height: var(--header-height);
    font-weight: normal;
`;

export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 100%;

    @media (max-width: 480px) {
        margin-right: -0.35rem;
    }
`;
