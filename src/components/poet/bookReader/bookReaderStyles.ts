import styled from 'styled-components';
import { Dialog } from '@mui/material';
import { Page } from 'react-pdf';

// Components
import { TitleWrapper } from '../../common/header/headerStyles';

export const MainContainer = styled(Dialog)`
    height: 100%;
    width: 100%;

    & .MuiPaper-root {
        background-color: var(--primary-black-color);
    }
`;

export const Title = styled(TitleWrapper)`
    font-size: var(--header-normal);
    font-family: var(--fancy-font);
    max-height: var(--header-height);
    font-weight: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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

// Pdf viewer
export const ViewerContainer = styled.div`
    max-height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
`;

export const StyledPage = styled(Page)`
    margin-bottom: var(--text-segment-gap);

    &:last-child {
        margin-bottom: 0rem;
    }
`;
