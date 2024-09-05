import React from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Components
import FirstBox from './FirstBox';
import SecondBox from './SecondBox';
import ThirdBox from './ThirdBox';
import ForthBox from './ForthBox';
import FifthBox from './FifthBox';
import SixthBox from './SixthBox';

// Styled components
import { MainContainer } from './poetBioStyles';

export default function PoetBio({ bioData }) {
    const { lang } = useGlobalData();

    return (
        <MainContainer id="Biography">
            <FirstBox poet={bioData.one} />
            <SecondBox poet={bioData} />
            <ThirdBox poet={bioData.three[lang]} />
            <ForthBox poet={bioData.four[lang]} />
            <FifthBox poet={bioData.five[lang]} />
            <SixthBox poet={bioData} />
        </MainContainer>
    );
}
