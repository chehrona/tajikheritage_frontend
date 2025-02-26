import React from 'react';

// Hooks
import { useGlobalData } from '../../hooks/useGlobalData';
import { useSetHeader } from '../../hooks/useSetHeader';

// Helper
import alertMessages from '../../miscellaneous/alertMessages.json';

// Components
import AppLayout from '../../AppLayout';

// Styled components
import {
    MainContainer,
    CodeWrapper,
    Code,
    ErrorMessage,
} from './pageNotFoundStyles';

const PageNotFound: React.FC = () => {
    const { lang } = useGlobalData();

    useSetHeader('reset');

    return (
        <AppLayout>
            <MainContainer>
                <CodeWrapper>
                    <Code>404</Code>
                    <ErrorMessage>
                        {alertMessages.PAGE_NOT_FOUND[lang]}
                    </ErrorMessage>
                </CodeWrapper>
            </MainContainer>
        </AppLayout>
    );
};

export default PageNotFound;
