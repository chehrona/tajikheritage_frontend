import React, { useState, useEffect, useRef } from 'react';

// Library imports
import { Document, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Components
import Loader from '../../common/loader/Loader';
import PageNotFound from '../../../errorPages/pageNotFound/PageNotFound';

// Styled components
import { ViewerContainer, StyledPage } from './bookReaderStyles';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const PDFViewer: React.FC<{ pdfUrl: string }> = ({ pdfUrl }) => {
    const { isLoading } = useGlobalData();
    const [numPages, setNumPages] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [screenWidth, setScreenWidth] = useState<number>(350);

    useEffect(() => {
        const updateScale = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth - 8;
                setScreenWidth(containerWidth);
            }
        };

        updateScale();

        window.addEventListener('resize', updateScale);

        return () => window.removeEventListener('resize', updateScale);
    }, []);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    return (
        <ViewerContainer ref={containerRef}>
            <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<Loader inProp={isLoading} />}
                error={<PageNotFound />}
                noData={<PageNotFound />}
            >
                {Array.from(new Array(numPages), (el, index) => (
                    <StyledPage
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        width={screenWidth}
                        renderTextLayer={false}
                    />
                ))}
            </Document>
        </ViewerContainer>
    );
};

export default PDFViewer;
