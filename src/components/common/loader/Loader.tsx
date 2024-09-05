import React, { useRef } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';

// Styled components
import { MainContainer, LoaderImg, LoaderContainer } from './loaderStyles';
import { transitionStylesProps } from './types/componentTypes';

const duration = 350;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
};

const transitionStyles: transitionStylesProps = {
    entering: { opacity: 1 },
    entered: { opacity: 0.8 },
    exiting: { opacity: 0.4 },
    exited: { opacity: 0, display: 'none' },
    unmounted: { visibility: 'hidden' },
};

const Loader: React.FC<{ inProp: boolean }> = ({ inProp }) => {
    const nodeRef = useRef<HTMLDivElement>(null);

    return (
        <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
            {(state: TransitionStatus) => (
                <div
                    ref={nodeRef}
                    style={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                    }}
                >
                    <MainContainer>
                        <LoaderContainer>
                            <LoaderImg src={'/loader.png'} />
                        </LoaderContainer>
                    </MainContainer>
                </div>
            )}
        </Transition>
    );
};

export default Loader;
