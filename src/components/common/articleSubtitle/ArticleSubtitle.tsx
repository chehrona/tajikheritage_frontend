import React from 'react';

// Types
import { ArticleSubtitleProps } from './types/componentTypes';

// Styled components
import { Subtitle } from './articleSubtitleStyles';

const ArticleSubtitle: React.FC<ArticleSubtitleProps> = ({
    subtitle,
    length,
    reverse,
}) => {
    return (
        <Subtitle
            dangerouslySetInnerHTML={{ __html: subtitle }}
            $reverse={reverse}
            $length={length}
        />
    );
};

export default ArticleSubtitle;
