import React, { useRef } from 'react';
import { Transition } from 'react-transition-group';

import { MainContainer, LoaderImg, LoaderContainer } from './loaderStyles';

const duration = 350;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
};

const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 0.8 },
    exiting: { opacity: 0.4 },
    exited: { opacity: 0, display: 'none' },
};

const Loader = ({ inProp }) => {
    const nodeRef = useRef(null);

    return (
        <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
            {(state) => (
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
