import React from 'react';

// Styled component
import { LogoWrapper, StyledLink, Logo } from './headerLogoStyles';

const HeaderLogo: React.FC<{ handleLogoClick: () => void }> = ({
    handleLogoClick,
}) => {
    return (
        <LogoWrapper>
            <StyledLink to={'/'} onClick={handleLogoClick}>
                <Logo src={'/tajiks.png'}></Logo>
            </StyledLink>
        </LogoWrapper>
    );
};

export default HeaderLogo;
