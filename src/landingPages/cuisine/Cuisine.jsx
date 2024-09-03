import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGlobalData } from '../../hooks/useGlobalData';

import { requestPage } from '../../services/request';

import RecipeCard from '../../components/food/recipeCard/RecipeCard';
import Fade from '../../components/common/transition/Fade';
import Loader from '../../components/common/loader/Loader';

import { PageContainer, RecipeBoxContainer } from './cuisinePageStyles';

import {
    TempImg,
    TempPageContainer,
    TempTitle,
} from '../language/languagePageStyles';

function Cuisine() {
    const location = useLocation();
    const { setLang, lang } = useGlobalData();
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(0);

    const fetchData = async () => {
        try {
            setLoading(1);
            const data = await requestPage('cuisine');
            setRecipes(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(0);
        }
    };

    // useEffect(() => {
    //     // Get data
    //     fetchData();

    //     if (location.search.length) {
    //         setLang(location.search.substring(1));
    //     }
    // }, []);

    return (
        // <>
        //     <Loader inProp={loading} />
        //     {recipes && (
        //         <Fade inProp={!loading}>
        //             <PageContainer>
        //                 <RecipeBoxContainer justify={recipes?.length}>
        //                     {recipes?.map((recipe, i) => {
        //                         return (<RecipeCard key={i} recipe={recipe} i={i} />);
        //                     })}
        //                 </RecipeBoxContainer>
        //             </PageContainer>
        //         </Fade>
        //     )}
        // </>
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

export default Cuisine;
