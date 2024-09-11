import React from 'react';

// Hooks
import { useLocation } from 'react-router-dom';

// Styled components
import {
    FooterContainer,
    FooterInnerContainer,
    StyledCopyrightIcon,
    Text,
    StyledIconButton,
    StyledIcon,
    SocialsWrapper,
} from './footerStyles';

const Footer: React.FC = () => {
    const location = useLocation();
    const noShow =
        location.pathname === '/' || location.pathname.includes('print');

    return (
        <FooterContainer $show={!noShow}>
            <FooterInnerContainer>
                <Text>
                    <StyledCopyrightIcon />
                    The Tajik Heritage 2023
                </Text>
                <SocialsWrapper>
                    <a
                        href="https://www.pinterest.ca/thetajikheritage/"
                        rel="noreferrer"
                        target={'_blank'}
                    >
                        <StyledIconButton>
                            <StyledIcon
                                src={`${process.env.PUBLIC_URL}/footerIcons/pin.png`}
                                $rad={true}
                            />
                        </StyledIconButton>
                    </a>
                    <a
                        href="https://www.instagram.com/tajik_heritage/"
                        rel="noreferrer"
                        target={'_blank'}
                    >
                        <StyledIconButton>
                            <StyledIcon
                                src={`${process.env.PUBLIC_URL}/footerIcons/inst.png`}
                                $rad={false}
                            />
                        </StyledIconButton>
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=61559405503836"
                        rel="noreferrer"
                        target={'_blank'}
                    >
                        <StyledIconButton>
                            <StyledIcon
                                src={`${process.env.PUBLIC_URL}/footerIcons/facebook.png`}
                                $rad={false}
                            />
                        </StyledIconButton>
                    </a>
                    <a
                        href="mailto:thetajikheritage@gmail.com"
                        rel="noreferrer"
                        target={'_blank'}
                    >
                        <StyledIconButton>
                            <StyledIcon
                                src={`${process.env.PUBLIC_URL}/footerIcons/mail.png`}
                                $rad={false}
                            />
                        </StyledIconButton>
                    </a>
                </SocialsWrapper>
            </FooterInnerContainer>
        </FooterContainer>
    );
};

export default Footer;
