import React from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Types
import { SectionCardProps } from './types/componentTypes';

// Styled components
import {
    SectionCardWrapper,
    SectionImage,
    SectionTitle,
    ImageWrapper,
    StyledLink,
} from './sectionCardStyles';

const SectionCard: React.FC<SectionCardProps> = ({ section, link, i }) => {
    const { lang } = useGlobalData();

    return (
        <StyledLink to={link}>
            <SectionCardWrapper $delay={`${0.01 * i}s`}>
                <ImageWrapper>
                    <SectionImage
                        src={
                            process.env.REACT_APP_BASE_URL + section?.img[lang]
                        }
                    />
                </ImageWrapper>
                <SectionTitle $length={section?.title[lang].length}>
                    {section?.title[lang]}
                </SectionTitle>
            </SectionCardWrapper>
        </StyledLink>
    );
};

export default SectionCard;
