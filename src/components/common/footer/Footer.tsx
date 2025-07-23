import React from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Helper
import staticText from '../../../miscellaneous/staticTexts.json';

// Components
import DonateButton from '../donateButton/DonateButton';

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
                            <DonateButton />
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
                            <StyledLink
                                to={
                                    process.env.NODE_ENV === 'development'
                                        ? 'http://localhost:3003'
                                        : 'https://farhang.thetajikheritage.com'
                                }
                                rel="noreferrer"
                                target={'_blank'}
                            >
                                {
                                    staticText.FOOTER_TITLES.resources[lang]
                                        .list[1]
                                }
                            </StyledLink>
                        </LinksWrapper>
                    </SocialsContainer>
                    <SocialsContainer>
                        <Title>{staticText.FOOTER_TITLES.socials[lang]}</Title>
                        <SocialsWrapper>
                            <StyledLink
                                to="https://www.instagram.com/tajik_heritage/"
                                rel="noreferrer"
                                target={'_blank'}
                            >
                                <StyledIconButton>
                                    <StyledIcon
                                        src={`./icons/socials/instagram.svg`}
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
                                        src={`./icons/socials/pinterest.svg`}
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
                                        src={`./icons/socials/youtube.svg`}
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
                                        src={`./icons/socials/facebook.svg`}
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
