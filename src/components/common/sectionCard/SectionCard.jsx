import React from "react";

import { useSetLang } from "../../../App";

import { 
    SectionCardWrapper,
    SectionImage,
    SectionTitle,
    ImageWrapper,
    StyledLink
} from "./sectionCardStyles";

export default function SectionCard({ section, link, i }) {
    const { lang } = useSetLang();

    return (
        <StyledLink to={link}>
            <SectionCardWrapper delay={`${0.01*i}s`}>
                <ImageWrapper>
                    <SectionImage src={process.env.REACT_APP_BASE_URL + section?.img} />
                </ImageWrapper>
                <SectionTitle>{section?.title[lang]}</SectionTitle>
            </SectionCardWrapper>
        </StyledLink>
    );
}