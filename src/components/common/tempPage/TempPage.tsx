import React from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';
import { useSetHeader } from '../../../hooks/useSetHeader';

//Helper
import info from '../../../miscellaneous/staticTexts.json';

// Styled components
import { TempImg, TempPageContainer, TempTitle } from './tempPageStyles';

const TempPage: React.FC<{ page: string }> = ({ page }) => {
    // Delete
    const { lang } = useGlobalData();
    useSetHeader(page, 'landing', '');

    return (
        <TempPageContainer>
            <TempTitle>{info.TEMP_PAGE_INFO[lang]}</TempTitle>
            <TempImg src={'/loader.png'} />
        </TempPageContainer>
    );
};

export default TempPage;
