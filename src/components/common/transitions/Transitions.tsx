import React, { ReactElement } from 'react';

// Material UI
import { Zoom } from '@mui/material';

// Types
import { TransitionProps } from '@mui/material/transitions';

// Zoom in of the dialog
export const ZoomTransition = React.forwardRef<
    unknown,
    TransitionProps & {
        children: ReactElement;
    }
>((props, ref) => {
    const { children, ...otherProps } = props;

    return (
        <Zoom
            easing={{ enter: 'linear', exit: 'linear' }}
            ref={ref}
            {...otherProps}
        >
            {children}
        </Zoom>
    );
});
