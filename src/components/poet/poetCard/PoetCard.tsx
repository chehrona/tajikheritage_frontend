import React, { useState } from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Helper
import alertMessages from '../../../miscellaneous/alertMessages.json';

// Components
import CardWrapper from '../../common/cardWrapper/CardWrapper';
import Alert from '../../common/alert/Alert';

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
    const [error, setError] = useState<boolean>(false);
    const poetName = poet?.name[lang].split(' ');

    return (
        <>
            <CardWrapper
                type={'long'}
                disabled={poet.disabled}
                page={poet?.id}
                setError={setError}
            >
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
            {error && (
                <Alert
                    message={alertMessages.ARTICLE_UNAVAILABLE}
                    type={'info'}
                />
            )}
        </>
    );
};

export default PoetCard;
