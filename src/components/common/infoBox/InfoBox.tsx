import React, { useState, useEffect } from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Types
import { InfoBoxProps } from './types/componentTypes';

// Styled components
import {
    InfoWrapper,
    Text,
    StyledCloseButton,
    StyledExpandButton,
    StyledCloseIcon,
    StyledExpandIcon,
} from './infoBoxStyles';

const InfoBox: React.FC<InfoBoxProps> = ({ text }) => {
    const { lang } = useGlobalData();
    const [showInfo, setShowInfo] = useState(true);

    useEffect(() => {
        setShowInfo(true);
    }, [lang]);

    return showInfo ? (
        <InfoWrapper>
            <Text dangerouslySetInnerHTML={{ __html: text }} />
            <StyledCloseButton onClick={() => setShowInfo(false)}>
                <StyledCloseIcon />
            </StyledCloseButton>
        </InfoWrapper>
    ) : (
        <StyledExpandButton onClick={() => setShowInfo(true)}>
            <StyledExpandIcon />
        </StyledExpandButton>
    );
};

export default InfoBox;
