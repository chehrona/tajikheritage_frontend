import React from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Types
import { PoetBioSectionOneProps } from './types/componentTypes';

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

const FirstBox: React.FC<PoetBioSectionOneProps> = ({ poet }) => {
    const { lang } = useGlobalData();

    return (
        <BoxOne>
            <LeftContainer>
                <Year $color={'#000'}>{poet[lang]?.year}</Year>
                <Desc dangerouslySetInnerHTML={{ __html: poet[lang]?.desc }} />
            </LeftContainer>
            <RightImageWrapper>
                <FirstBoxImg src={process.env.REACT_APP_BASE_URL + poet?.img} />
                <ImgInfo
                    dangerouslySetInnerHTML={{ __html: poet[lang]?.imgDesc }}
                />
            </RightImageWrapper>
        </BoxOne>
    );
};

export default FirstBox;
