import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import {
    MainContainer,
    StyledFrame,
    Title,
    IconWrapper,
} from './bookReaderStyles';
import { BookPopupProps } from '../bookshelfDesign/types/componentTypes';
import {
    HeaderContainer,
    HeaderInnerBox,
} from '../../common/header/headerStyles';
import HeaderLogo from '../../common/headerLogo/HeaderLogo';
import { Zoom } from '@mui/material';
import CloseButton from '../../common/closeButton/CloseButton';

const BookReader: React.FC<BookPopupProps> = ({ book, setBookIndex }) => {
    const [pdfUrl, setPdfUrl] = useState<string>('');
    const baseUrl =
        process.env.REACT_APP_BASE_URL || 'http://api.thetajikheritage.com';

    const handleCloseReader = () => {
        setBookIndex(-1);
    };

    useEffect(() => {
        if (book?.source) {
            const fetchPdf = async () => {
                try {
                    const response = await axios.get(
                        `${baseUrl + book?.source}`,
                        {
                            responseType: 'arraybuffer',
                        },
                    );
                    const blob = new Blob([response.data], {
                        type: 'application/pdf',
                    });
                    const pdfBlobUrl = URL.createObjectURL(blob);
                    setPdfUrl(pdfBlobUrl);
                } catch (error) {
                    console.error('Error fetching PDF file:', error);
                }
            };

            fetchPdf();

            // Cleanup function to revoke the URL when the component unmounts or when a new PDF URL is created
            return () => {
                if (pdfUrl) {
                    URL.revokeObjectURL(pdfUrl);
                }
            };
        }
    }, [book?.source]);

    const handleLogoClick = useCallback(() => {
        setBookIndex(-1);
        setPdfUrl('');
    }, [setBookIndex]);

    return (
        <MainContainer
            open={(book.source?.length ?? 0) > 0}
            fullScreen
            TransitionComponent={Zoom}
            TransitionProps={{
                timeout: 200,
            }}
        >
            <HeaderContainer $show={true}>
                <HeaderInnerBox>
                    <HeaderLogo handleLogoClick={handleLogoClick} />
                    <Title $index={0}>{book?.title}</Title>
                    <IconWrapper>
                        <CloseButton handleClose={handleCloseReader} />
                    </IconWrapper>
                </HeaderInnerBox>
            </HeaderContainer>
            {pdfUrl ? <StyledFrame src={`${pdfUrl}#toolbar=0`} /> : null}
        </MainContainer>
    );
};

export default BookReader;
