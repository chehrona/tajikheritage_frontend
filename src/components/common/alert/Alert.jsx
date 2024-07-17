import React, { useState, useEffect } from 'react';

// Hooks
import { useGlobalData } from '../../../App';

// Styled components
import { StyledAlert } from './alertStyles';

export default function Alert({ message, type }) {
    const { lang } = useGlobalData();
    const [currentMessage, setCurrentMessage] = useState(message[lang]);
    const [visible, setVisible] = useState(true);

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
}
