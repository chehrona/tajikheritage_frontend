import React from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Components
import CardWrapper from '../../common/cardWrapper/CardWrapper';

// Types
import { PoetCardProps } from './types/componentTypes';

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

const PoetCard: React.FC<PoetCardProps> = ({ poet, i }) => {
    const { lang } = useGlobalData();

    return (
        <CardWrapper
            i={i}
            type={'long'}
            disabled={poet.disabled}
            page={'/language/poets/' + poet?.id}
        >
            <PoetCardContent>
                <PoetImgContainer>
                    <PoetImage
                        src={process.env.REACT_APP_BASE_URL + poet?.img}
                    />
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
            </PoetCardContent>
        </CardWrapper>
    );
};

export default PoetCard;
