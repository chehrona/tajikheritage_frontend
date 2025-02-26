import React, { useState, useEffect } from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Types
import { TableProps } from './types/componentTypes';

// Styled components
import { TableImage, MainContainer } from './tableStyles';
import { ImgInfo } from '../slideshow/slideshowStyles';

const Table: React.FC<TableProps> = ({ content }) => {
    const { lang } = useGlobalData();
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        setExpanded(false);
    }, [lang]);

    return (
        <MainContainer
            $expanded={expanded}
            onClick={() => setExpanded((prevState) => !prevState)}
        >
            <TableImage
                $expanded={expanded}
                src={`${process.env.REACT_APP_BASE_URL}${content.source}`}
            />
            {content.info.length > 0 ? (
                <ImgInfo
                    dangerouslySetInnerHTML={{
                        __html: content?.info,
                    }}
                />
            ) : null}
        </MainContainer>
    );
};

export default Table;
