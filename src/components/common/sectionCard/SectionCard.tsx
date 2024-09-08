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

const SectionCard: React.FC<SectionCardProps> = ({ section, link, i }) => {
    const { lang } = useGlobalData();

    return (
        <CardWrapper i={i} page={link} type={'long'}>
            <SectionCardWrapper>
                <ImageWrapper>
                    <SectionImage
                        src={
                            process.env.REACT_APP_BASE_URL +
                            section?.cardImg[lang]
                        }
                    />
                </ImageWrapper>
                <SectionTitle $length={section?.cardTitle[lang].length}>
                    {section?.cardTitle[lang]}
                </SectionTitle>
            </SectionCardWrapper>
        </CardWrapper>
    );
};

export default SectionCard;
