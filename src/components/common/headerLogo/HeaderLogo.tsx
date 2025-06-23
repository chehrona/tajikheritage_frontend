import React from 'react';

// Types
import { HeaderLogoProps } from './types/componentTypes';

// Styled component
import { LogoWrapper, StyledLink, Logo } from './headerLogoStyles';

const HeaderLogo: React.FC<HeaderLogoProps> = ({
    handleLogoClick,
    navTo = '/',
}) => {
    return (
        <LogoWrapper>
            <StyledLink to={navTo} onClick={handleLogoClick}>
                <Logo src={'/customAssets/logo.svg'}></Logo>
            </StyledLink>
        </LogoWrapper>
    );
};

export default HeaderLogo;
