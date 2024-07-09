import React from 'react';

// Components
import { Tooltip } from '../tooltip/Tooltip';

// Styled components
import { StyledSpan } from './descWrapperStyles';

export const DescWrapper = ({ desc, TextWrapper }) => {
    const renderContent = () => {
        return Object.keys(desc).map((key, i) => {
            const content = desc[key];

            if (key.startsWith('tooltip')) {
                return <Tooltip key={i} content={content} />;
            } else {
                return (
                    <StyledSpan
                        key={i + 10}
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                );
            }
        });
    };

    return <TextWrapper>{renderContent()}</TextWrapper>;
};
