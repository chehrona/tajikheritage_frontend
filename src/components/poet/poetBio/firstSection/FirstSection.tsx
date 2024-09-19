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
import { LeftContainer, Title, SectionText } from '../poetBioStyles';

const FirstSection: React.FC<{ bioOne: PoetBioSectionOne }> = ({ bioOne }) => {
    return (
        <MainContainer>
            <LeftContainer>
                <Title $color={'var(--regular-black-color)'}>
                    {bioOne?.year}
                </Title>
                <DescWrapper data={bioOne?.desc} TextWrapper={SectionText} />
            </LeftContainer>
            <RightImageWrapper>
                <div>
                    <FirstBoxImg
                        key={bioOne.slides[0]?.id}
                        src={
                            process.env.REACT_APP_BASE_URL +
                            bioOne.slides[0]?.img
                        }
                    />
                    <ImgInfo
                        dangerouslySetInnerHTML={{
                            __html: bioOne.slides[0]?.info,
                        }}
                    />
                </div>
            </RightImageWrapper>
        </MainContainer>
    );
};

export default FirstSection;
