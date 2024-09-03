import React from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

//Helper
import info from '../../../miscellaneous/staticTexts.json';

// Styled components
import { TempImg, TempPageContainer, TempTitle } from './tempPageStyles';

function TempPage() {
    // Delete
    const { lang } = useGlobalData();

    return (
        <TempPageContainer>
            <TempTitle>{info.TEMP_PAGE_INFO[lang]}</TempTitle>
            <TempImg src={'/loader.png'} />
        </TempPageContainer>
    );
}

export default TempPage;
