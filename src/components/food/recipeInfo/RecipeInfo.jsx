import React, { useState } from 'react';
import { useGlobalData } from '../../../hooks/useGlobalData';

import { DescWrapper } from '../../common/descWrapper/DescWrapper';

import {
    InfoContainer,
    MainTitle,
    HistoryInfo,
    ImageContainer,
    MainImage,
    StyledPinIcon,
} from './recipeInfoStyles';

export default function RecipeInfo({ recipe }) {
    const { lang } = useGlobalData();
    const [pinHovered, setPinHovered] = useState(false);

    // const PinterestPinCreator = ({ imageUrl, description, url }) => {
    //     return (
    //       <PinItButton
    //         media={imageUrl}
    //         description={description}
    //         url={url}
    //         layout="horizontal"
    //       />
    //     );
    //   };

    return (
        <InfoContainer>
            <ImageContainer
                onMouseEnter={() => setPinHovered(true)}
                onMouseLeave={() => setPinHovered(false)}
            >
                {/* {pinHovered &&  */}
                {/* <PinterestPinCreator imageUrl={recipe?.pinMedia} description={"hello"} url={recipe?.pinUrl}>
                    </PinterestPinCreator> */}
                {/* } */}
                <MainImage src={recipe?.mainImg} />
            </ImageContainer>
            <MainTitle>{recipe.title[lang]}</MainTitle>
            <DescWrapper
                desc={recipe?.history[lang]}
                TextWrapper={HistoryInfo}
            />
        </InfoContainer>
    );
}
