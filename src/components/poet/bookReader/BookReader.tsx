import React, { useEffect, useState, useCallback } from 'react';

// Material UI
import { Zoom } from '@mui/material';

// Services
import { requestPdf } from '../../../services/request';

// Components
import HeaderLogo from '../../common/headerLogo/HeaderLogo';
import CloseButton from '../../common/closeButton/CloseButton';
import PDFViewer from './PdfViewer';
import Loader from '../../common/loader/Loader';

// Types
import { BookPopupProps } from '../bookshelfDesign/types/componentTypes';

// Styled components
import { MainContainer, Title, IconWrapper } from './bookReaderStyles';
import {
    HeaderContainer,
    HeaderInnerBox,
} from '../../common/header/headerStyles';

const BookReader: React.FC<BookPopupProps> = ({ book, setBookIndex }) => {
    const [pdfUrl, setPdfUrl] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleCloseReader = () => {
        setBookIndex(-1);
    };

    const fetchPdf = async () => {
        try {
            setLoading(true);

            if (!book.source) {
                return;
            }

            const response = await requestPdf(book.source);

            setPdfUrl(response);
        } catch (error) {
            console.error('Error fetching PDF file:', error);
        } finally {
            const timer = setTimeout(() => {
                setLoading(false);
            }, 500);

            return () => clearTimeout(timer);
        }
    };

    useEffect(() => {
        // Get data
        fetchPdf();
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
            <Loader inProp={loading} />
            <HeaderContainer $show={true}>
                <HeaderInnerBox>
                    <HeaderLogo handleLogoClick={handleLogoClick} navTo={'#'} />
                    <Title $index={0}>{book?.title}</Title>
                    <IconWrapper>
                        <CloseButton handleClose={handleCloseReader} />
                    </IconWrapper>
                </HeaderInnerBox>
            </HeaderContainer>
            <PDFViewer pdfUrl={pdfUrl} />
        </MainContainer>
    );
};

export default BookReader;
