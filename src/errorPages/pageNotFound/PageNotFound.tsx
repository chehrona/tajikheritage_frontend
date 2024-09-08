import React from 'react';

// Hooks
import { useGlobalData } from '../../hooks/useGlobalData';

// Helper
import alertMessages from '../../miscellaneous/alertMessages.json';

// Styled components
import {
    MainContainer,
    CodeWrapper,
    Code,
    ErrorMessage,
} from './pageNotFoundStyles';

const PageNotFound: React.FC = () => {
    const { lang } = useGlobalData();

    return (
        <MainContainer>
            <CodeWrapper>
                <Code>404</Code>
                <ErrorMessage>
                    {alertMessages.PAGE_NOT_FOUND[lang]}
                </ErrorMessage>
            </CodeWrapper>
        </MainContainer>
    );
};

export default PageNotFound;
