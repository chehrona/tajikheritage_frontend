import { Transition } from 'react-transition-group';
import { useRef } from 'react';

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
};

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 1 },
};

export default function Fade({ inProp, children }) {
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
                    {children}
                </div>
            )}
        </Transition>
    );
}
