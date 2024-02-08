import React, { useState, useEffect } from "react";

import { useSetLang } from "../../../App";

import {
    InfoWrapper,
    Text,
    StyledCloseButton,
    StyledExpandButton,
    StyledCloseIcon,
    StyledExpandIcon
} from "./infoBoxStyles";

export default function InfoBox({ text }) {
    const { lang } = useSetLang();
    const [showInfo, setShowInfo] = useState(true);

    useEffect(() => {
        setShowInfo(true);
    }, [lang]);

    return (
        showInfo ? (
            <InfoWrapper>
                <Text dangerouslySetInnerHTML={{__html: text}} />
                <StyledCloseButton onClick={() => setShowInfo(false)}>
                    <StyledCloseIcon />
                </StyledCloseButton>
            </InfoWrapper>
        ) : (
            <StyledExpandButton onClick={() => setShowInfo(true)}>
                <StyledExpandIcon />
            </StyledExpandButton>
        )
    );
}