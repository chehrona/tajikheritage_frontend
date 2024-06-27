import React from 'react';

// Hooks
import { useGlobalData } from '../../../App';

// Styled components
import {
    PoetCardWrapper,
    PoetImage,
    PoetDates,
    PoetImgContainer,
    PoetNameBox,
    PoetName,
    PoetInfoContainer,
    StyledLink,
} from './poetCardStyles';

export default function PoetCard({ poet, i }) {
    const { lang } = useGlobalData();

    return (
        <StyledLink to={'/language/poets/' + poet?.id}>
            <PoetCardWrapper delay={`${0.01 * i}s`}>
                <PoetImgContainer>
                    <PoetImage
                        src={process.env.REACT_APP_BASE_URL + poet?.img}
                    />
                    <PoetNameBox>
                        <PoetName>{poet?.name[lang][0]}</PoetName>
                        <PoetName>{poet?.name[lang][1]}</PoetName>
                        <PoetDates>
                            {poet?.years[lang][0]}-{poet?.years[lang][1]}
                        </PoetDates>
                    </PoetNameBox>
                </PoetImgContainer>
                <PoetInfoContainer
                    dangerouslySetInnerHTML={{ __html: poet?.desc[lang] }}
                />
            </PoetCardWrapper>
        </StyledLink>
    );
}
