import React from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Components
import CardWrapper from '../../common/cardWrapper/CardWrapper';

// Types
import { PoetCardType } from './types/componentTypes';

// Styled components
import {
    PoetCardContent,
    PoetImgContainer,
    PoetImage,
    PoetNameBox,
    PoetName,
    PoetDates,
    PoetInfoContainer,
} from './poetCardStyles';

const PoetCard: React.FC<{ poet: PoetCardType }> = ({ poet }) => {
    const { lang } = useGlobalData();
    const poetName = poet?.name[lang].split(' ');

    return (
        <CardWrapper type={'long'} disabled={poet.disabled} page={poet?.id}>
            <PoetCardContent>
                <PoetImgContainer>
                    <PoetImage
                        src={process.env.REACT_APP_BASE_URL + poet?.img}
                    />
                </PoetImgContainer>
                <PoetNameBox>
                    <PoetName>{poetName[0]}</PoetName>
                    <PoetName>{poetName[1]}</PoetName>
                    <PoetDates>
                        {poet?.years[0]}-{poet?.years[1]}
                    </PoetDates>
                </PoetNameBox>
                <PoetInfoContainer
                    dangerouslySetInnerHTML={{
                        __html: poet?.desc[lang],
                    }}
                />
            </PoetCardContent>
        </CardWrapper>
    );
};

export default PoetCard;
