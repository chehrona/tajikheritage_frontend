import React from 'react';

// Styled components
import { Subtitle } from './articleSubtitleStyles';

const ArticleSubtitle: React.FC<{ subtitle: string }> = ({ subtitle }) => {
    return <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />;
};

export default ArticleSubtitle;
