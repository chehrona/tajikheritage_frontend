import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    filter: brightness(1);
`;

export const CardWrapper = styled.div`
    text-decoration: none;
    color: inherit;
    cursor: default;
    filter: brightness(0.5);
`;
