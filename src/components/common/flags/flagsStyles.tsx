import { IconButton, Tooltip, tooltipClasses } from '@mui/material';
import styled from 'styled-components';

// Types
import { IconButtonProps } from './types/styleTypes';
import { StyledTooltipProps } from '../tooltip/types/styleTypes';

// Flag logos
const khorLogo = `${process.env.PUBLIC_URL}/flags/khorasan.png`;
const usLogo = `${process.env.PUBLIC_URL}/flags/united-states.png`;
const ruLogo = `${process.env.PUBLIC_URL}/flags/russia.png`;
const tjLogo = `${process.env.PUBLIC_URL}/flags/tajikistan.png`;

export const FlagWrapper = styled.div`
    width: fit-content;
    cursor: pointer;
    pointer-events: auto;

    @media (max-width: 480px) {
        position: fixed;
        bottom: 0.25rem;
        left: 0.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        position: fixed;
        left: 0.75rem;
        bottom: 0.75rem;
    }
`;

export const StyledFlag = styled.div`
    width: 1.5rem;
    border-radius: 50%;
    height: 1.5rem;
    background-size: 100%;
    background-repeat: no-repeat;
    box-shadow: 0rem 0rem 0.5rem var(--primary-black-color);
    background-image: ${({ lang }) =>
        lang === 'kh'
            ? `url(${khorLogo})`
            : lang === 'us'
            ? `url(${usLogo})`
            : lang === 'ru'
            ? `url(${ruLogo})`
            : `url(${tjLogo})`};

    @media (max-width: 480px) {
        height: 2rem;
        width: 2rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 2.25rem;
        width: 2.25rem;
    }
`;

export const FlagDropdown = styled.div<{ $showLangMenu: boolean }>`
    flex-direction: column;
    display: ${({ $showLangMenu }) => ($showLangMenu ? 'flex' : 'none')};
`;

export const StyledIconButton = styled(IconButton)<IconButtonProps>`
    &.MuiIconButton-root {
        height: 2.5rem;
        width: 2.5rem;
        margin-bottom: 0.2rem;
    }

    @media (max-width: 480px) {
        &.MuiIconButton-root {
            margin-bottom: 0.5rem;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        &.MuiIconButton-root {
            margin-bottom: 1.25rem;
        }
    }
`;

export const StyledTooltip = styled(
    ({ className, ...props }: StyledTooltipProps) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ),
)(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
        fontSize: 'inherit',
        fontFamily: 'inherit',
        fontWeight: 'normal',
        padding: '0.5rem 1rem',
    },
    [`& .${tooltipClasses.tooltipArrow}`]: {
        backgroundColor: 'var(--primary-shadow-color)',
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: 'var(--primary-shadow-color)',
    },
    '@media (max-width: 1024px)': {
        [`& .${tooltipClasses.tooltip}`]: {
            display: 'none',
        },
    },
}));
