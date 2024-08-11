import React, { useState } from 'react';

// Hooks
import { useGlobalData } from '../../../App';

// Helper
import alert from '../../../miscellaneous/alertMessages.json';

// Components
import Alert from '../alert/Alert';

// Styled components
import { SquareCardWrapper, SquareImage, StyledLink } from './squareCardStyles';

export default function SquareCard({ item, i }) {
    const { lang } = useGlobalData();
    const [error, setError] = useState(false);

    const handleNoContent = () => {
        setError(true);
    };

    return (
        <>
            {item?.disabled ? (
                <StyledLink onClick={handleNoContent} disabled={item.disabled}>
                    <SquareCardWrapper delay={`${0.01 * i}s`}>
                        <SquareImage
                            src={
                                process.env.REACT_APP_BASE_URL +
                                item?.img?.[lang]
                            }
                        />
                    </SquareCardWrapper>
                </StyledLink>
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
            {error && (
                <Alert message={alert.ARTICLE_UNAVAILABLE} type={'info'} />
            )}
        </>
    );
}
