import React, { useState, useEffect } from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Types
import { AlertProps } from './types/componentTypes';

// Styled components
import { StyledAlert } from './alertStyles';

const Alert: React.FC<AlertProps> = ({ message, type }) => {
    const { lang } = useGlobalData();
    const [currentMessage, setCurrentMessage] = useState<string>(message[lang]);
    const [visible, setVisible] = useState<boolean>(true);

    useEffect(() => {
        setCurrentMessage(message[lang]);
        setVisible(true);
        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [message, lang]);

    if (!visible) return null;

    return <StyledAlert severity={type}>{currentMessage}</StyledAlert>;
};

export default Alert;
