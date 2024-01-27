import React from 'react';
import { useSetLang } from '../../../App';

import {
    BoxOne,
    LeftContainer,
    RightImageWrapper,
    ImgInfo,
    Year,
    Desc,
    FirstBoxImg
} from './poetBioStyles';

export default function FirstBox({ poet }) {
    const { lang } = useSetLang();

    return (
        <BoxOne>
            <LeftContainer>
                <Year color={'#000'}>{poet[lang]?.year}</Year>
                <Desc dangerouslySetInnerHTML={{__html: poet[lang]?.desc}} />
            </LeftContainer>
            <RightImageWrapper>
                <FirstBoxImg src={process.env.REACT_APP_BASE_URL + poet?.img} />
                <ImgInfo dangerouslySetInnerHTML={{__html: poet[lang]?.imgDesc}} />
            </RightImageWrapper>
        </BoxOne>
    )
}