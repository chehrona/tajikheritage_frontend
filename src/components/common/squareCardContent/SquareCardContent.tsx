import React from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Types
import { SquareCardProps } from '../squareCard/types/componentTypes';

// Styled components
import { SquareCardWrapper, SquareImage } from './squareCardContentStyles';

const SquareCardContent: React.FC<SquareCardProps> = ({ item, i }) => {
    const { lang } = useGlobalData();

    return (
        <SquareCardWrapper $delay={`${0.01 * i}s`}>
            <SquareImage
                src={process.env.REACT_APP_BASE_URL + item?.img[lang]}
            />
        </SquareCardWrapper>
    );
};

export default SquareCardContent;
