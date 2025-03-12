import React, { useState } from 'react';

// Material UI
import { ClickAwayListener } from '@mui/material';

// Types
import { TooltipProps } from './types/componentTypes';

// Styled components
import {
    StyledTooltip,
    WordWrapper,
    StyledTypography,
    StyledImage,
    ImageWrapper,
} from './tooltipStyles';

export const Tooltip: React.FC<TooltipProps> = ({ content }) => {
    const [show, setShow] = useState<boolean>(false);

    function handleShow() {
        setShow(true);
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
                        onMouseEnter={() => setShow(true)}
                        onMouseLeave={() => setShow(false)}
                    />
                </ClickAwayListener>
            </span>
        </StyledTooltip>
    );
};
