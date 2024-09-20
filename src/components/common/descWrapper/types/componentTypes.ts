import React, { ReactNode } from 'react';
import { TooltipType } from '../../tooltip/types/componentTypes';
import { SoundType } from '../../../proverb/soundBox/types/componentTypes';

export type BodyObj = {
    [key: string]: string | TooltipType | SoundType;
};

export type DescWrapperProps = {
    data: BodyObj;
    TextWrapper?: React.ComponentType<{ children: ReactNode }>;
};
