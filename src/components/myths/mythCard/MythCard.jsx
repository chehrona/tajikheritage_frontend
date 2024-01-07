import React, { useState } from "react";
import { useSetLang } from "../../../App";
import { useMediaQuery } from "react-responsive";

import {
    MythCardWrapper,
    MythImage,
    StyledLink
} from "./mythCardStyles";

export default function MythCard({ myth, i }) {
    const { lang } = useSetLang();
    const [hovered, setHovered] = useState(0);
    const isMobile = useMediaQuery({ query: `(max-width: 1024px)` })

    return (   
        <StyledLink
            to={"/customs/mythology/" + myth?.id}
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(0)}
        >
            <MythCardWrapper delay={`${0.01*i}s`}>
                <MythImage src={(hovered && !isMobile) ? process.env.REACT_APP_BASE_URL + myth?.img?.animated[lang] : process.env.REACT_APP_BASE_URL + myth?.img?.static[lang]} />
            </MythCardWrapper>
        </StyledLink>
    );
}