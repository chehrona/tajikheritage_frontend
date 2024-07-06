import React from 'react';

// Hooks
import { useGlobalData } from '../../../App';

// Styled components
import { SquareCardWrapper, SquareImage, StyledLink } from './squareCardStyles';

export default function SquareCard({ item, i }) {
    const { lang } = useGlobalData();

    return (
        <StyledLink to={item?.id}>
            <SquareCardWrapper delay={`${0.01 * i}s`}>
                <SquareImage
                    src={process.env.REACT_APP_BASE_URL + item?.img?.[lang]}
                />
            </SquareCardWrapper>
        </StyledLink>
    );
}
