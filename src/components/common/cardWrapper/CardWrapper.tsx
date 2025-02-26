import React from 'react';

// Types
import { CardWrapperProps } from './types/componentTypes';

// Styled components
import { StyledLink } from './cardWrapperStyles';
import { useToasts } from '../../../hooks/useToasts';

const CardWrapper: React.FC<CardWrapperProps> = ({
    page,
    disabled = false,
    children,
    type,
}) => {
    const { showToast } = useToasts();

    const handleNoContent = () => {
        if (disabled) {
            showToast('ARTICLE_UNAVAILABLE', 'info', page);
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
