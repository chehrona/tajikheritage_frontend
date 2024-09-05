import React, { useState } from 'react';

// Helper
import alertMessages from '../../../miscellaneous/alertMessages.json';

// Components
import Alert from '../../common/alert/Alert';
import PoetCardContent from '../poetCardContent/PoetCardContent';

// Types
import { PoetCardProps } from './types/componentTypes';

// Styled components
import { StyledLink, CardContainer } from './poetCardStyles';

const PoetCard: React.FC<PoetCardProps> = ({ poet, i }) => {
    const [error, setError] = useState<boolean>();

    const handleNoContent = () => {
        setError(true);
    };

    return (
        <>
            {poet?.disabled ? (
                <CardContainer onClick={handleNoContent}>
                    <PoetCardContent poet={poet} i={i} />
                </CardContainer>
            ) : (
                <StyledLink to={'/language/poets/' + poet?.id}>
                    <PoetCardContent poet={poet} i={i} />
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

export default PoetCard;
