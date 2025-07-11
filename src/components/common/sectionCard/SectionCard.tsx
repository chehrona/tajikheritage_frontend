import React from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Components
import CardWrapper from '../cardWrapper/CardWrapper';

// Types
import { SectionCardProps } from './types/componentTypes';

// Styled components
import {
    SectionCardWrapper,
    SectionImage,
    SectionTitle,
    ImageWrapper,
} from './sectionCardStyles';

const SectionCard: React.FC<SectionCardProps> = ({ section }) => {
    const { lang } = useGlobalData();

    return (
        <CardWrapper
            page={section.link}
            type={'long'}
            disabled={section.disabled}
        >
            <SectionCardWrapper>
                <ImageWrapper>
                    <SectionImage $src={section?.cardImg[lang]} />
                </ImageWrapper>
                <SectionTitle $length={section?.cardTitle[lang].length}>
                    {section?.cardTitle[lang]}
                </SectionTitle>
            </SectionCardWrapper>
        </CardWrapper>
    );
};

export default SectionCard;
