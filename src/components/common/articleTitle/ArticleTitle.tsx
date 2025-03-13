import React from 'react';

// Types
import { ArticleTitleProps } from './types/componentTypes';

// Styled components
import { TitleWrapper } from './articleTitleStyles';

const ArticleTitle: React.FC<ArticleTitleProps> = ({ title, color, align }) => {
    return (
        <TitleWrapper $align={align} $color={color}>
            {title}
        </TitleWrapper>
    );
};

export default ArticleTitle;
