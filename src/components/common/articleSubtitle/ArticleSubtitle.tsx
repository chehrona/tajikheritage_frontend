import React from 'react';

// Types
import { ArticleSubtitleProps } from './types/componentTypes';

// Styled components
import {
    SubtitleWrapper,
    Subtitle,
    LineWrapper,
    Circle,
    Line,
} from './articleSubtitleStyles';

const ArticleSubtitle: React.FC<ArticleSubtitleProps> = ({
    subtitle,
    hasSlides,
}) => {
    return (
        <SubtitleWrapper>
            {!hasSlides ? (
                <LineWrapper $right={true}>
                    <Line />
                    <Circle />
                </LineWrapper>
            ) : null}
            <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
            <LineWrapper $right={false}>
                <Circle />
                <Line />
            </LineWrapper>
        </SubtitleWrapper>
    );
};

export default ArticleSubtitle;
