import React, { useState } from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Helper
import alertMessages from '../../../miscellaneous/alertMessages.json';

// Components
import CardWrapper from '../../common/cardWrapper/CardWrapper';
import Alert from '../../common/alert/Alert';

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
    const [error, setError] = useState<boolean>(false);

    return (
        <>
            <CardWrapper
                i={i}
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
