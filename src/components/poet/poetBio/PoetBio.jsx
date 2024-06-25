import React from 'react';

// Hooks
import { useSetLang } from '../../../App';

// Components
import FirstBox from './FirstBox';
import SecondBox from './SecondBox';
import ThirdBox from './ThirdBox';
import ForthBox from './ForthBox';
import FifthBox from './FifthBox';
import SixthBox from './SixthBox';

// Styled components
import { MainContainer } from './poetBioStyles';

export default function PoetBio({ poet }) {
    const { lang } = useSetLang();

    return (
        <MainContainer id="Biography">
            <FirstBox poet={poet?.bio?.one} />
            <SecondBox poet={poet?.bio} />
            <ThirdBox poet={poet?.bio} />
            <ForthBox poet={poet?.bio} />
            <FifthBox poet={poet?.bio?.five[lang]} />
            <SixthBox poet={poet?.bio} />
        </MainContainer>
    );
}
