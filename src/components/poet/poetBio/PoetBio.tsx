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

// Types
import { PoetBioType } from './types/componentTypes';

// Styled components
import { MainContainer } from './poetBioStyles';

const PoetBio: React.FC<{ bioData: PoetBioType }> = ({ bioData }) => {
    const { lang } = useGlobalData();

    return (
        <MainContainer id="Biography">
            <FirstBox bioOne={bioData.one[lang]} />
            <SecondBox bioData={bioData} />
            <ThirdBox bioThree={bioData.three[lang]} />
            <ForthBox bioFour={bioData.four[lang]} />
            <FifthBox bioFive={bioData.five[lang]} />
            <SixthBox poet={bioData} />
        </MainContainer>
    );
};

export default PoetBio;
