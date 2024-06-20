import React from 'react';
import { useSetLang } from '../../../App';

import { SquareCardWrapper, SquareImage, StyledLink } from './squareCardStyles';

export default function SquareCard({ item, i }) {
    const { lang } = useSetLang();

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
