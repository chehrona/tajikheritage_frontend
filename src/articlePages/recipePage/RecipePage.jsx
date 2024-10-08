import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';

import RecipeInfo from '../../components/food/recipeInfo/RecipeInfo';
import RecipeIngredients from '../../components/food/recipeIngredients/RecipeIngredients';
import Sources from '../../components/common/sources/Sources';
import RecipeTabs from '../../components/food/recipeTabs/RecipeTabs';
import Allergy from '../../components/food/allergy/Allergy';
import Directions from '../../components/food/directions/Directions';
import Servings from '../../components/food/servings/Servings';
import CookTime from '../../components/food/cookTime/CookTime';
import PrintRecipe from '../../components/food/printRecipe/PrintRecipe';

import { requestArticleInfo } from '../../services/request';

import {
    PageContainer,
    InstructionContainer,
    IngredientContainer,
    SubContainer,
    RecipeContainer,
    CookingInfoContainer,
} from './recipePageStyles';

export default function RecipePage() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState();
    const [servings, setServings] = useState(recipe?.startServing);
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    const fetchData = async () => {
        try {
            const data = await requestArticleInfo(id, 'cuisine/recipes');
            setRecipe(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        // Get data
        fetchData();
    }, []);

    if (recipe) {
        return (
            <PageContainer>
                <RecipeContainer>
                    <RecipeInfo recipe={recipe} />
                    <Sources
                        data={recipe?.references}
                        line={'var(--primary-shadow-color)'}
                        color={
                            'var(--primary-var(--regular-white-color);-color)'
                        }
                        title={'#fff'}
                        background={'var(--primary-black-color)'}
                    />
                    <RecipeTabs id={recipe?.id} />
                    <SubContainer>
                        <IngredientContainer>
                            <Allergy recipe={recipe} />
                            <CookingInfoContainer>
                                <Servings
                                    servings={servings}
                                    setServings={setServings}
                                />
                                <CookTime recipe={recipe} />
                                {!isMobile && <PrintRecipe recipe={recipe} />}
                            </CookingInfoContainer>
                        </IngredientContainer>
                        <InstructionContainer>
                            <RecipeIngredients recipe={recipe} />
                            <Directions recipe={recipe} />
                        </InstructionContainer>
                    </SubContainer>
                    {isMobile && <PrintRecipe recipe={recipe} />}
                </RecipeContainer>
            </PageContainer>
        );
    }
}
