import React from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Types
import { PoetCardProps } from '../poetCard/types/componentTypes';

// Styled components
import {
    PoetCardWrapper,
    PoetImage,
    PoetDates,
    PoetImgContainer,
    PoetNameBox,
    PoetName,
    PoetInfoContainer,
} from './poetCardContentStyles';

const PoetCardContent: React.FC<PoetCardProps> = ({ poet, i }) => {
    const { lang } = useGlobalData();

    return (
        <PoetCardWrapper $delay={`${0.01 * i}s`}>
            <PoetImgContainer>
                <PoetImage src={process.env.REACT_APP_BASE_URL + poet?.img} />
                <PoetNameBox>
                    <PoetName>{poet?.name[lang][0]}</PoetName>
                    <PoetName>{poet?.name[lang][1]}</PoetName>
                    <PoetDates>
                        {poet?.years[0]}-{poet?.years[1]}
                    </PoetDates>
                </PoetNameBox>
            </PoetImgContainer>
            <PoetInfoContainer
                dangerouslySetInnerHTML={{
                    __html: poet?.desc[lang],
                }}
            />
        </PoetCardWrapper>
    );
};

export default PoetCardContent;
