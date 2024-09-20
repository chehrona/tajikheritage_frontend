import { DescDetails } from '../../../../appTypes';

export type TextSegmentProps = {
    i: number;
    data: DescDetails;
    title?: string;
    reverse?: boolean | null;
    topLeftRad: number;
};
