import React from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Components
import CardWrapper from '../cardWrapper/CardWrapper';

// Types
import { CardType } from '../../../middlePages/middlePage/types/componentTypes';

// Styled components
import { SquareImage } from './squareCardStyles';

const SquareCard: React.FC<{ data: CardType }> = ({ data }) => {
    const { lang } = useGlobalData();

    return (
        <CardWrapper disabled={data.disabled} page={data?.id} type={'square'}>
            <SquareImage
                src={process.env.REACT_APP_BASE_URL + data?.cardImg[lang]}
            />
        </CardWrapper>
    );
};

export default SquareCard;
