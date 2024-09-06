import React, { useCallback, useState } from 'react';

// Helper
import alertMessages from '../../../miscellaneous/alertMessages.json';

// Components
import Alert from '../alert/Alert';

// Types
import { CardWrapperProps } from './types/componentTypes';

// Styled components
import { StyledLink } from './cardWrapperStyles';

const CardWrapper: React.FC<CardWrapperProps> = ({
    i,
    page,
    disabled,
    children,
    type,
}) => {
    const [error, setError] = useState<boolean>();

    const height =
        type === 'long'
            ? { d: 35, t: 34.66, m: 19.025 }
            : { d: 23, t: 25, m: 12.5 };

    const handleNoContent = useCallback(() => {
        setError(true);
    }, []);

    return (
        <>
            <StyledLink
                $height={height}
                $delay={`${0.01 * i}s`}
                $disabled={disabled}
                to={disabled ? '#' : page}
                onClick={handleNoContent}
            >
                {children}
            </StyledLink>
            {error && (
                <Alert
                    message={alertMessages.ARTICLE_UNAVAILABLE}
                    type={'info'}
                />
            )}
        </>
    );
};

export default CardWrapper;
