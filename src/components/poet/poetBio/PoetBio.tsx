import React from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Components
import FirstSection from './firstSection/FirstSection';
import SecondSection from './secondSection/SecondSection';
import ThirdSection from './thirdSection/ThirdSection';
import ForthSection from './forthSection/ForthSection';
import FifthSection from './fifthSection/FifthSection';
import SixthSection from './sixthSection/SixthSection';

// Types
import { PoetBioType } from './types/componentTypes';

// Styled components
import { MainContainer } from './poetBioStyles';

const PoetBio: React.FC<{ bioData: PoetBioType }> = ({ bioData }) => {
    const { lang } = useGlobalData();

    return (
        <MainContainer id="Biography">
            <FirstSection bioOne={bioData.one[lang]} />
            <SecondSection bioData={bioData} />
            <ThirdSection bioThree={bioData.three[lang]} />
            <ForthSection bioFour={bioData.four[lang]} />
            <FifthSection bioFive={bioData.five[lang]} />
            <SixthSection poet={bioData} />
        </MainContainer>
    );
};

export default PoetBio;
