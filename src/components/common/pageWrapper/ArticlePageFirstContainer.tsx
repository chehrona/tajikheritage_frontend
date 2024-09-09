import React, { ReactNode } from 'react';

//Styled components
import { ArticleContainer } from './pageWrapperStyles';

const ArticlePageFirstContainer: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    return <ArticleContainer>{children}</ArticleContainer>;
};

export default ArticlePageFirstContainer;
