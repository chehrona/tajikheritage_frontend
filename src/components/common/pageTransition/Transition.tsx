import React, { useRef } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';

// Types
import {
    PageTransitionProps,
    transitionStylesProps,
} from './types/componentTypes';

const duration = 350;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
};

const loaderTransitionStyles: transitionStylesProps = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 1 },
    unmounted: { visibility: 'hidden' },
};

const pageTransitionStyles: transitionStylesProps = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 1 },
    unmounted: { visibility: 'hidden' },
};

const PageTransition: React.FC<PageTransitionProps> = ({
    inProp,
    type,
    children,
}) => {
    const nodeRef = useRef<HTMLDivElement>(null);

    return (
        <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
            {(state: TransitionStatus) => (
                <div
                    ref={nodeRef}
                    style={{
                        ...defaultStyle,
                        ...(type === 'loader'
                            ? loaderTransitionStyles[state]
                            : pageTransitionStyles[state]),
                    }}
                >
                    {children}
                </div>
            )}
        </Transition>
    );
};

export default PageTransition;
