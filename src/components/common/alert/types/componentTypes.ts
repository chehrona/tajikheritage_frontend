import { Langs } from '../../../../appTypes';

export type AlertProps = {
    message: {
        [key in Langs]: string;
    };
    type: 'success' | 'error' | 'info';
};
