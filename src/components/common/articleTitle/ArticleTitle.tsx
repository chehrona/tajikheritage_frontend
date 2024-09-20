import React from 'react';

// Styled components
import { TitleWrapper } from './articleTitleStyles';

const ArticleTitle: React.FC<{ title: string }> = ({ title }) => {
    return <TitleWrapper>{title}</TitleWrapper>;
};

export default ArticleTitle;
