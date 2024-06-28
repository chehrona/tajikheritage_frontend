import React, { useState } from 'react';
import { ClickAwayListener } from '@mui/material';

import {
    StyledTooltip,
    WordWrapper,
    StyledTypography,
    StyledImage,
    ImageWrapper,
} from './tooltipStyles';

export const Tooltip = ({ content }) => {
    const [show, setShow] = useState(0);

    function handleShow() {
        setShow(1);
    }

    function handleClickAway() {
        setShow(false);
    }

    return (
        <StyledTooltip
            open={show}
            arrow
            placement="top"
            title={
                content?.img ? (
                    <ImageWrapper>
                        <StyledImage
                            src={process.env.REACT_APP_BASE_URL + content?.img}
                        />
                        <StyledTypography
                            dangerouslySetInnerHTML={{ __html: content.text }}
                        />
                    </ImageWrapper>
                ) : (
                    <StyledTypography
                        dangerouslySetInnerHTML={{ __html: content.text }}
                    />
                )
            }
        >
            <span>
                <ClickAwayListener onClickAway={handleClickAway}>
                    <WordWrapper
                        dangerouslySetInnerHTML={{ __html: content.word }}
                        onClick={handleShow}
                        onMouseEnter={() => setShow(1)}
                        onMouseLeave={() => setShow(0)}
                    />
                </ClickAwayListener>
            </span>
        </StyledTooltip>
    );
};
