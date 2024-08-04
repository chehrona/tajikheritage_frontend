import React from 'react';

// Styled components
import { Subtitle } from './articleSubtitleStyles';

export default function ArticleSubtitle({ subtitle, length, reverse }) {
    return (
        <Subtitle
            dangerouslySetInnerHTML={{ __html: subtitle }}
            reverse={reverse}
            length={length}
        />
    );
}
