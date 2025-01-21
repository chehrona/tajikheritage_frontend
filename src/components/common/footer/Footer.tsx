import React from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Helper
import staticText from '../../../miscellaneous/staticTexts.json';

// Styled components
import {
    FooterContainer,
    FooterInnerContainer,
    StyledCopyrightIcon,
    Text,
    StyledIconButton,
    StyledIcon,
    SocialsWrapper,
    InfoContainer,
    SocialsContainer,
    Title,
    StyledLink,
    LinksWrapper,
} from './footerStyles';

const Footer: React.FC = () => {
    const { lang } = useGlobalData();

    return (
        <FooterContainer>
            <FooterInnerContainer>
                <InfoContainer>
                    <SocialsContainer>
                        <Title>
                            {staticText.FOOTER_TITLES.links[lang].title}
                        </Title>
                        <LinksWrapper>
                            <StyledLink
                                to="mailto:thetajikheritage@gmail.com"
                                rel="noreferrer"
                                target={'_blank'}
                            >
                                {staticText.FOOTER_TITLES.links[lang].list[0]}
                            </StyledLink>
                            <StyledLink
                                to="https://www.paypal.com/donate/?hosted_button_id=ZF3B5GD7HKV8J"
                                rel="noreferrer"
                                target={'_blank'}
                            >
                                {staticText.FOOTER_TITLES.links[lang].list[1]}
                            </StyledLink>
                        </LinksWrapper>
                    </SocialsContainer>
                    <SocialsContainer>
                        <Title>
                            {staticText.FOOTER_TITLES.resources[lang].title}
                        </Title>
                        <LinksWrapper>
                            <StyledLink
                                to={
                                    '#'
                                    // process.env.NODE_ENV === 'development'
                                    //     ? 'http://localhost:3002'
                                    //     : 'https://library.thetajikheritage.com'
                                }
                                // rel="noreferrer"
                                // target={'_blank'}
                            >
                                {
                                    staticText.FOOTER_TITLES.resources[lang]
                                        .list[0]
                                }
                            </StyledLink>
                        </LinksWrapper>
                    </SocialsContainer>
                    <SocialsContainer>
                        <Title>Follow us</Title>
                        <SocialsWrapper>
                            <StyledLink
                                to="https://www.instagram.com/tajik_heritage/"
                                rel="noreferrer"
                                target={'_blank'}
                            >
                                <StyledIconButton>
                                    <StyledIcon
                                        src={`${process.env.PUBLIC_URL}/footerIcons/inst.png`}
                                        $rad={false}
                                    />
                                </StyledIconButton>
                            </StyledLink>
                            <StyledLink
                                to="https://www.pinterest.ca/thetajikheritage/"
                                rel="noreferrer"
                                target={'_blank'}
                            >
                                <StyledIconButton>
                                    <StyledIcon
                                        src={`${process.env.PUBLIC_URL}/footerIcons/pin.png`}
                                        $rad={true}
                                    />
                                </StyledIconButton>
                            </StyledLink>
                            <StyledLink
                                to="https://www.youtube.com/@thetajikheritage"
                                rel="noreferrer"
                                target={'_blank'}
                            >
                                <StyledIconButton>
                                    <StyledIcon
                                        src={`${process.env.PUBLIC_URL}/footerIcons/youtube.png`}
                                        $rad={false}
                                    />
                                </StyledIconButton>
                            </StyledLink>
                            <StyledLink
                                to="https://www.facebook.com/profile.php?id=61559405503836"
                                rel="noreferrer"
                                target={'_blank'}
                            >
                                <StyledIconButton>
                                    <StyledIcon
                                        src={`${process.env.PUBLIC_URL}/footerIcons/facebook.png`}
                                        $rad={false}
                                    />
                                </StyledIconButton>
                            </StyledLink>
                        </SocialsWrapper>
                    </SocialsContainer>
                </InfoContainer>
                <Text>
                    <StyledCopyrightIcon />
                    {`2023-2025 The Tajik Heritage. ${staticText.FOOTER_TITLES.copyright[lang]}.`}
                </Text>
            </FooterInnerContainer>
        </FooterContainer>
    );
};

export default Footer;
