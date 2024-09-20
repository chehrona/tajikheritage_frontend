import React from 'react';

// Hooks
import { useGlobalData } from '../../../App';

//Helper
import staticText from '../../../miscellaneous/staticTexts.json';

// Styled components
import { TempImg, TempPageContainer, TempTitle } from './tempPageStyles';

function TempPage() {
    // Delete
    const { lang } = useGlobalData();

    return (
        <TempPageContainer>
            <TempTitle>{staticText.TEMP_PAGE_INFO[lang]}</TempTitle>
            <TempImg src={'/customAssets/loader.png'} />
        </TempPageContainer>
    );
}

export default TempPage;
