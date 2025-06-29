import React from 'react';

// Components
import { Tooltip } from '../tooltip/Tooltip';
import Table from '../table/Table';
import SoundButton from '../soundButton/SoundButton';
import Video from '../video/Video';

// Types
import { DescWrapperProps } from './types/componentTypes';
import { TooltipType } from '../tooltip/types/componentTypes';
import { SoundType } from '../../proverb/soundBox/types/componentTypes';
import { TableType } from '../table/types/componentTypes';
import { VideoType } from '../video/types/componentTypes';

// Styled components
import { EmptyDiv, SoundBox } from './descWrapperStyles';
import GlobalStyles from '../../../globalStyles';

export const DescWrapper: React.FC<DescWrapperProps> = ({
    data,
    TextWrapper = EmptyDiv,
}) => {
    const renderContent = () => {
        return Object.keys(data).map((key, i) => {
            const content = data[key];

            switch (true) {
                case key.startsWith('text'):
                    return (
                        <span
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
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: typedContent.text,
                                }}
                            />
                            <SoundButton data={typedContent.source} />
                        </SoundBox>
                    );
                case key.startsWith('table'):
                    return <Table key={key} content={content as TableType} />;
                case key.startsWith('video'):
                    return <Video key={key} content={content as VideoType} />;
                default:
                    return null;
            }
        });
    };

    return (
        <React.Fragment>
            <GlobalStyles />
            <TextWrapper>{renderContent()}</TextWrapper>
        </React.Fragment>
    );
};
