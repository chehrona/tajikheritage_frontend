import React, { useEffect, useState } from 'react';
import { useSetLang } from '../../App';
import { useLocation } from 'react-router-dom';

import { requestMiddlePage } from '../../services/request';

import PoetCard from '../../components/poet/poetCard/PoetCard';
import Fade from '../../components/common/transition/Fade';
import Loader from '../../components/common/loader/Loader';

import { PageContainer, PoetBoxContainer } from './langsPageStyles';
import {
    TempImg,
    TempPageContainer,
    TempTitle,
} from '../../landingPages/language/languagePageStyles';

function PoetsPage() {
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

export default PoetsPage;
