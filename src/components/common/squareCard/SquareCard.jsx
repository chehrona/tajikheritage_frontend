import React, { useState } from 'react';

// Hooks
import { useGlobalData } from '../../../App';

// Components
import Alert from '../alert/Alert';

// Styled components
import {
    SquareCardWrapper,
    SquareImage,
    StyledLink,
    CardsContainer,
} from './squareCardStyles';

export default function SquareCard({ item, i }) {
    const { lang } = useGlobalData();
    const [error, setError] = useState('');

    const handleNoContent = () => {
        setError({
            us: 'Article is not available yet',
            ru: 'Статья еще не доступна',
            tj: 'Мақола ҳанӯз вуҷуд надорад',
        });
    };

    return (
        <>
            {item?.disabled ? (
                <CardsContainer onClick={handleNoContent}>
                    <SquareCardWrapper delay={`${0.01 * i}s`}>
                        <SquareImage
                            src={
                                process.env.REACT_APP_BASE_URL +
                                item?.img?.[lang]
                            }
                        />
                    </SquareCardWrapper>
                </CardsContainer>
            ) : (
                <StyledLink to={item?.id}>
                    <SquareCardWrapper delay={`${0.01 * i}s`}>
                        <SquareImage
                            src={
                                process.env.REACT_APP_BASE_URL +
                                item?.img?.[lang]
                            }
                        />
                    </SquareCardWrapper>
                </StyledLink>
            )}
            {error[lang]?.length > 0 && <Alert message={error} type={'info'} />}
        </>
    );
}
