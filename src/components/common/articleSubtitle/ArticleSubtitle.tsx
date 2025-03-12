import React from 'react';

// Hooks
import { useMediaQuery } from 'react-responsive';

// Types
import { ArticleSubtitleProps } from './types/componentTypes';

// Styled components
import {
    SubtitleWrapper,
    Subtitle,
    LeftWrapper,
    RightWrapper,
    Circle,
    Line,
} from './articleSubtitleStyles';

const ArticleSubtitle: React.FC<ArticleSubtitleProps> = ({
    subtitle,
    hasSlides,
    reverse = null,
}) => {
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
    const showLeftLine = isMobile ? true : hasSlides ? false : true;
    const isReverse = hasSlides ? reverse : null;

    return (
        <SubtitleWrapper $reverse={isReverse}>
            <LeftWrapper $show={showLeftLine}>
                <Line />
                <Circle />
            </LeftWrapper>
            <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
            <RightWrapper>
                <Circle />
                <Line />
            </RightWrapper>
        </SubtitleWrapper>
    );
};

export default ArticleSubtitle;
