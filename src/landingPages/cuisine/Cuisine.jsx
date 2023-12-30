import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSetLang } from "../../App";

import { requestPage } from "../../services/request";

import RecipeCard from '../../components/food/recipeCard/RecipeCard';
import Fade from "../../components/common/transition/Transition";
import Loader from "../../components/common/loader/Loader";

import { PageContainer, RecipeBoxContainer } from './cuisinePageStyles';

function Cuisine() {
    const location = useLocation();
    const { setLang } = useSetLang();
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(0);

    const fetchData = async () => {
        try {
            setLoading(1);
            const data = await requestPage("cuisine");
            setRecipes(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(0);
        }
    };

    useEffect(() => {
        // Get data
        fetchData();

        if (location.search.length) {
            setLang(location.search.substring(1));
        }
    }, []);

    return (
        <>
            <Loader inProp={loading} />
            {recipes && (
                <Fade inProp={!loading}>
                    <PageContainer>
                        <RecipeBoxContainer justify={recipes?.length}>
                            {recipes?.map((recipe, i) => {
                                return (<RecipeCard key={i} recipe={recipe} i={i} />);
                            })}
                        </RecipeBoxContainer>
                    </PageContainer>
                </Fade>
            )}
        </>
    );
}

export default Cuisine;