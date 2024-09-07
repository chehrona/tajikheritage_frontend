import React from 'react';

// Types
import { CardWrapperProps } from './types/componentTypes';

// Styled components
import { StyledLink } from './cardWrapperStyles';

const CardWrapper: React.FC<CardWrapperProps> = ({
    i,
    page,
    disabled = false,
    children,
    type,
    setError,
}) => {
    const handleNoContent = () => {
        if (disabled && setError) {
            setError(true);

            setTimeout(() => {
                setError(false);
            }, 3000);
        }
    };

    return (
        <StyledLink
            $type={type}
            $delay={`${0.01 * i}s`}
            $disabled={disabled}
            to={disabled ? '#' : page}
            onClick={handleNoContent}
        >
            {children}
        </StyledLink>
    );
};

export default CardWrapper;
