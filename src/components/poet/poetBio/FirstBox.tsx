import React from 'react';

// Types
import { PoetBioSectionOne } from './types/componentTypes';

// Components
import { DescWrapper } from '../../common/descWrapper/DescWrapper';

// Styled components
import {
    BoxOne,
    LeftContainer,
    RightImageWrapper,
    ImgInfo,
    Year,
    Desc,
    FirstBoxImg,
} from './poetBioStyles';

const FirstBox: React.FC<{ bioOne: PoetBioSectionOne }> = ({ bioOne }) => {
    return (
        <BoxOne>
            <LeftContainer>
                <Year $color={'var(--regular-black-color)'}>
                    {bioOne?.year}
                </Year>
                <DescWrapper data={bioOne?.desc} TextWrapper={Desc} />
            </LeftContainer>
            <RightImageWrapper>
                <FirstBoxImg
                    key={bioOne.slides[0]?.id}
                    src={process.env.REACT_APP_BASE_URL + bioOne.slides[0]?.img}
                />
                <ImgInfo
                    dangerouslySetInnerHTML={{ __html: bioOne.slides[0]?.info }}
                />
            </RightImageWrapper>
        </BoxOne>
    );
};

export default FirstBox;
