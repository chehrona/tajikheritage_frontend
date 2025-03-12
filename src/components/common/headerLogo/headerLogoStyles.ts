import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(var(--header-height) - 1rem);
    height: calc(var(--header-height) - 1rem);

    @media (max-width: 480px) {
        width: calc(var(--header-height) - 0.5rem);
        height: calc(var(--header-height) - 0.5rem);
    }
`;

export const Logo = styled.img`
    height: 100%;
    width: 100%;
`;

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
`;
