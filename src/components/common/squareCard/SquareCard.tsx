import React, { useState } from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Helper
import alertMessages from '../../../miscellaneous/alertMessages.json';

// Components
import CardWrapper from '../cardWrapper/CardWrapper';
import Alert from '../alert/Alert';

// Types
import { CardType } from '../../../middlePages/middlePage/types/componentTypes';

// Styled components
import { SquareImage } from './squareCardStyles';

const SquareCard: React.FC<{ data: CardType }> = ({ data }) => {
    const { lang } = useGlobalData();
    const [error, setError] = useState<boolean>(false);

    return (
        <>
            <CardWrapper
                disabled={data.disabled}
                page={data?.id}
                type={'square'}
                setError={setError}
            >
                <SquareImage
                    src={process.env.REACT_APP_BASE_URL + data?.cardImg[lang]}
                />
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

export default SquareCard;
