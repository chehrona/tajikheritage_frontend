import React, { useState } from 'react';

// Components
import { Tooltip } from '../tooltip/Tooltip';
import SoundButton from '../soundButton/SoundButton';

// Types
import { DescWrapperProps } from './types/componentTypes';
import { TooltipType } from '../tooltip/types/componentTypes';

// Styled components
import {
    StyledSpan,
    EmptyDiv,
    SoundBox,
    TableImage,
} from './descWrapperStyles';
import { SoundType } from '../../proverb/soundBox/types/componentTypes';

export const DescWrapper: React.FC<DescWrapperProps> = ({
    data,
    TextWrapper = EmptyDiv,
}) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    const renderContent = () => {
        return Object.keys(data).map((key, i) => {
            const content = data[key];

            switch (true) {
                case key.startsWith('text'):
                    return (
                        <StyledSpan
                            key={i + 10}
                            dangerouslySetInnerHTML={{
                                __html: content as string,
                            }}
                        />
                    );
                case key.startsWith('tooltip'):
                    return <Tooltip key={i} content={content as TooltipType} />;
                case key.startsWith('sound'):
                    const typedContent = content as SoundType;
                    return (
                        <SoundBox key={key}>
                            <StyledSpan
                                dangerouslySetInnerHTML={{
                                    __html: typedContent.text,
                                }}
                            />{' '}
                            <SoundButton data={typedContent.source} />
                        </SoundBox>
                    );
                case key.startsWith('table'):
                    return (
                        <TableImage
                            key={key}
                            onClick={() =>
                                setExpanded((prevState) => !prevState)
                            }
                            $expanded={expanded}
                            src={`${process.env.REACT_APP_BASE_URL}${
                                content as string
                            }`}
                        />
                    );
                default:
                    return null;
            }
        });
    };

    return <TextWrapper>{renderContent()}</TextWrapper>;
};
