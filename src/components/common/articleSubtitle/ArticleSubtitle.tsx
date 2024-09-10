import React from 'react';

// Hooks
import { useMediaQuery } from 'react-responsive';

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
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
    const showRightLine = isMobile ? true : hasSlides ? false : true;

    return (
        <SubtitleWrapper>
            <LineWrapper $right={showRightLine}>
                <Line />
                <Circle />
            </LineWrapper>
            <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
            <LineWrapper $left={true}>
                <Circle />
                <Line />
            </LineWrapper>
        </SubtitleWrapper>
    );
};

export default ArticleSubtitle;
