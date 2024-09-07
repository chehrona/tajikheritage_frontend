import React, { ReactNode } from 'react';
import { TooltipType } from '../../tooltip/types/componentTypes';

export type BodyObj = {
    [key: string]: string | TooltipType;
};

export type DescWrapperProps = {
    data: BodyObj;
    TextWrapper?: React.ComponentType<{ children: ReactNode }>;
};
