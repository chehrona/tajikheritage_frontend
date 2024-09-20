import React from 'react';
import { useGlobalData } from '../../../hooks/useGlobalData';

import { MainContainer, SubTitle, Direction } from './directionsStyles';

export default function Directions({ recipe }) {
    const { lang } = useGlobalData();

    return (
        <MainContainer height={recipe?.height}>
            <SubTitle>
                {lang === 'us'
                    ? 'Directions'
                    : lang === 'ru'
                    ? 'Приготовление'
                    : 'Тарзи омодакунӣ'}
            </SubTitle>
            <div>
                {recipe.directions[lang].map((piece, i) => {
                    return (
                        <Direction
                            key={i}
                            dangerouslySetInnerHTML={{ __html: piece }}
                        ></Direction>
                    );
                })}
            </div>
        </MainContainer>
    );
}
