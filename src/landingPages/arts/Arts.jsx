import React from 'react';
import { useSetLang } from '../../App';

import { PageContainer } from './artsPageStyles';

import {
    TempImg,
    TempPageContainer,
    TempTitle,
} from '../language/languagePageStyles';

function Arts() {
    // Delete
    const { lang } = useSetLang();

    return (
        // <PageContainer></PageContainer>
        <TempPageContainer>
            <TempTitle>
                {lang === 'us'
                    ? 'Exciting updates are on the way!'
                    : lang === 'ru'
                    ? 'Обновления уже в пути!'
                    : 'Навигариҳо дар роҳ ҳастанд!'}
            </TempTitle>
            <TempImg src={'/loader.png'} />
        </TempPageContainer>
    );
}

export default Arts;
