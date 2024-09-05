import React from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

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
    const { lang } = useGlobalData();

    return (
        <BoxOne>
            <LeftContainer>
                <Year $color={'var(--regular-black-color)'}>
                    {bioOne[lang]?.year}
                </Year>
                <DescWrapper data={bioOne[lang]?.desc} TextWrapper={Desc} />
            </LeftContainer>
            <RightImageWrapper>
                <FirstBoxImg
                    src={process.env.REACT_APP_BASE_URL + bioOne?.img}
                />
                <ImgInfo
                    dangerouslySetInnerHTML={{ __html: bioOne[lang]?.imgDesc }}
                />
            </RightImageWrapper>
        </BoxOne>
    );
};

export default FirstBox;
