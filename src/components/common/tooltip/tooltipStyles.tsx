import styled from 'styled-components';
import { Tooltip, tooltipClasses } from '@mui/material';

// Types
import { StyledTooltipProps } from './types/styleTypes';

export const StyledTooltip = styled(
    ({ className, ...props }: StyledTooltipProps) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ),
)(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
        fontSize: 'var(--body-text)',
        fontWeight: 'normal',
        borderRadius: '0.5rem',
    },
    [`& .${tooltipClasses.tooltipArrow}`]: {
        backgroundColor: 'var(--primary-shadow-color)',
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: 'var(--primary-shadow-color)',
    },
}));

export const StyledTypography = styled.div`
    padding: 0.5rem;
    font-family: var(--regular-font);
    font-size: var(--body-text);
    /* line-height: var(--body-text-line-height); */

    @media (max-width: 480px) {
        padding: 0.25rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
        padding: 0.25rem;
        line-height: 1.5rem;
    }
`;

export const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 0.5rem;
`;

export const StyledImage = styled.img`
    height: 15rem;
    width: 10rem;
    margin: 0 auto;
    background: url('/customAssets/loader.png') center no-repeat;
    background-size: 50% auto;

    @media (max-width: 1024px) {
        padding-bottom: 0.5rem;
    }
`;

export const WordWrapper = styled.span`
    border-bottom: 1px dotted var(--primary-shadow-color);

    .termSpan {
        font-weight: bold;
        color: var(--primary-gold-color);
    }
`;
