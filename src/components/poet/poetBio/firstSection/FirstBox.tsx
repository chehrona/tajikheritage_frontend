import React from 'react';

// Types
import { PoetBioSectionOne } from './types/componentTypes';

// Components
import { DescWrapper } from '../../../common/descWrapper/DescWrapper';

// Styled components
import {
    MainContainer,
    RightImageWrapper,
    ImgInfo,
    FirstBoxImg,
} from './firstSectionStyles';
import { LeftContainer, Year, SectionText } from '../poetBioStyles';

const FirstSection: React.FC<{ bioOne: PoetBioSectionOne }> = ({ bioOne }) => {
    return (
        <MainContainer>
            <LeftContainer>
                <Year $color={'var(--regular-black-color)'}>
                    {bioOne?.year}
                </Year>
                <DescWrapper data={bioOne?.desc} TextWrapper={SectionText} />
            </LeftContainer>
            <RightImageWrapper>
                <FirstBoxImg
                    key={bioOne.slides[0]?.id}
                    src={process.env.REACT_APP_BASE_URL + bioOne.slides[0]?.img}
                />
            </RightImageWrapper>
            <ImgInfo
                dangerouslySetInnerHTML={{ __html: bioOne.slides[0]?.info }}
            />
        </MainContainer>
    );
};

export default FirstSection;
