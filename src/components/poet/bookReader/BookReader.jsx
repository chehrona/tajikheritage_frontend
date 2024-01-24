import React, { useEffect, useState } from "react";
import axios from "axios";

import {
    StyledDialog,
    StyledFrame,
    Header,
    Title,
    LogoWrapper,
    StyledLink,
    TitleWrapper,
    Logo,
    IconWrapper,
    StyledIconButton,
    StyledCloseIcon,
} from "./bookReaderStyles";

export default function BookReader({ book, setOpenBook, openBook, setBookIndex }) {
    const [pdfUrl, setPdfUrl] = useState("");

    function closeReader() {
        setOpenBook(false);
        setBookIndex(null);
    }

    useEffect(() => {    
        axios.get(`${process.env.REACT_APP_BASE_URL + book?.source}`, { responseType: 'arraybuffer' })
            .then(response => {
                const blob = new Blob([response.data], { type: 'application/pdf' });
                const pdfUrl = URL.createObjectURL(blob);
                setPdfUrl(pdfUrl);
            })
            .catch(error => {
                console.error('Error fetching PDF file:', error);
            })
    }, [book?.source]);    

    return (
        <StyledDialog open={openBook} fullScreen>
            <Header>
                <LogoWrapper>
                    <StyledLink to={'/'}>
                        <Logo src={'/tajiks.png'}></Logo>
                    </StyledLink>
                </LogoWrapper>
                <TitleWrapper>
                    <Title>{book?.title}</Title>
                </TitleWrapper>
                <IconWrapper>
                    <StyledIconButton onClick={closeReader}>
                        <StyledCloseIcon />
                    </StyledIconButton>
                </IconWrapper>
            </Header>
            <StyledFrame src={`${pdfUrl}#toolbar=0`} />
        </StyledDialog>
    )
}