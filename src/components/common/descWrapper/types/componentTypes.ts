import React, { ReactNode } from 'react';
import { TooltipType } from '../../tooltip/types/componentTypes';
import { SoundType } from '../../../proverb/soundBox/types/componentTypes';
import { TableType } from '../../table/types/componentTypes';

export type BodyObj = {
    [key: string]: string | TooltipType | SoundType | TableType;
};

export type DescWrapperProps = {
    data: BodyObj;
    TextWrapper?: React.ComponentType<{ children: ReactNode }>;
};
