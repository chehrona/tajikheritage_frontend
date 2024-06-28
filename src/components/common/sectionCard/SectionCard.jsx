import React from 'react';

// Hooks
import { useGlobalData } from '../../../App';

// Styled components
import {
    SectionCardWrapper,
    SectionImage,
    SectionTitle,
    ImageWrapper,
    StyledLink,
} from './sectionCardStyles';

export default function SectionCard({ section, link, i }) {
    const { lang } = useGlobalData();

    return (
        <StyledLink to={link}>
            <SectionCardWrapper delay={`${0.01 * i}s`}>
                <ImageWrapper>
                    <SectionImage
                        src={
                            process.env.REACT_APP_BASE_URL + section?.img[lang]
                        }
                    />
                </ImageWrapper>
                <SectionTitle length={section?.title[lang].length}>
                    {section?.title[lang]}
                </SectionTitle>
            </SectionCardWrapper>
        </StyledLink>
    );
}
