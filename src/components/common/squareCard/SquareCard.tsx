import React, { useState } from 'react';

// Helper
import alertMessages from '../../../miscellaneous/alertMessages.json';

// Components
import Alert from '../alert/Alert';
import SquareCardContent from '../squareCardContent/SquareCardContent';

// Types
import { SquareCardProps } from './types/componentTypes';

// Styled components
import { CardWrapper, StyledLink } from './squareCardStyles';

const SquareCard: React.FC<SquareCardProps> = ({ item, i }) => {
    const [error, setError] = useState<boolean>(false);

    const handleNoContent = () => {
        setError(true);
    };

    return (
        <>
            {item?.disabled ? (
                <CardWrapper onClick={handleNoContent}>
                    <SquareCardContent item={item} i={i} />
                </CardWrapper>
            ) : (
                <StyledLink to={item?.id}>
                    <SquareCardContent item={item} i={i} />
                </StyledLink>
            )}
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
