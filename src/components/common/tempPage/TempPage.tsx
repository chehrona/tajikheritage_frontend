import React from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';
import { useSetHeader } from '../../../hooks/useSetHeader';

//Helper
import info from '../../../miscellaneous/staticTexts.json';

// Components
import Loader from '../loader/Loader';

// Styled components
import { TempPageContainer, TempTitle } from './tempPageStyles';

const TempPage: React.FC<{ page: string }> = ({ page }) => {
    // Delete
    const { lang } = useGlobalData();
    useSetHeader(page, 'landing', '');

    return (
        <>
            <Loader inProp={true} />
            <TempPageContainer>
                <TempTitle>{info.TEMP_PAGE_INFO[lang]}</TempTitle>
            </TempPageContainer>
        </>
    );
};

export default TempPage;
