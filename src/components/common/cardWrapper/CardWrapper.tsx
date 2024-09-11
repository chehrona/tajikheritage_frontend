import React from 'react';

// Types
import { CardWrapperProps } from './types/componentTypes';

// Styled components
import { StyledLink } from './cardWrapperStyles';

const CardWrapper: React.FC<CardWrapperProps> = ({
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
            $disabled={disabled}
            to={disabled ? '#' : page}
            onClick={handleNoContent}
        >
            {children}
        </StyledLink>
    );
};

export default CardWrapper;
