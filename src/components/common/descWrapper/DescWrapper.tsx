import React, { useEffect, useState } from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Components
import { Tooltip } from '../tooltip/Tooltip';
import SoundButton from '../soundButton/SoundButton';

// Types
import { DescWrapperProps } from './types/componentTypes';
import { TooltipType } from '../tooltip/types/componentTypes';
import { SoundType } from '../../proverb/soundBox/types/componentTypes';

// Styled components
import { EmptyDiv, SoundBox } from './descWrapperStyles';
import GlobalStyles from '../../../globalStyles';
import Table from '../table/Table';
import { TableType } from '../table/types/componentTypes';

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
                            />{' '}
                            <SoundButton data={typedContent.source} />
                        </SoundBox>
                    );
                case key.startsWith('table'):
                    return <Table key={key} content={content as TableType} />;
                default:
                    return null;
            }
        });
    };

    return (
        <>
            <GlobalStyles />
            <TextWrapper>{renderContent()}</TextWrapper>
        </>
    );
};
