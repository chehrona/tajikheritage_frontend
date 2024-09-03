import React from 'react';

// Components
import { Tooltip } from '../tooltip/Tooltip';

// Types
import { DescWrapperProps } from './types/componentTypes';

// Styled components
import { StyledSpan } from './descWrapperStyles';
import { TooltipType } from '../tooltip/types/componentTypes';

export const DescWrapper: React.FC<DescWrapperProps> = ({
    data,
    TextWrapper,
}) => {
    const renderContent = () => {
        return Object.keys(data).map((key, i) => {
            const content = data[key];

            if (key.startsWith('tooltip')) {
                return <Tooltip key={i} content={content as TooltipType} />;
            } else {
                return (
                    <StyledSpan
                        key={i + 10}
                        dangerouslySetInnerHTML={{ __html: content as string }}
                    />
                );
            }
        });
    };

    return <TextWrapper>{renderContent()}</TextWrapper>;
};
