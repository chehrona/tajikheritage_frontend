import styled, { css } from 'styled-components';
import { IconButton, Tooltip, tooltipClasses } from '@mui/material';

// Types
import { IconButtonProps } from './types/styleTypes';
import { StyledTooltipProps } from '../tooltip/types/styleTypes';

// Flag logos
const khorLogo = `${process.env.PUBLIC_URL}/flags/khorasan.png`;
const usLogo = `${process.env.PUBLIC_URL}/flags/united-states.png`;
const ruLogo = `${process.env.PUBLIC_URL}/flags/russia.svg`;
const tjLogo = `${process.env.PUBLIC_URL}/flags/tajikistan.svg`;

export const FlagWrapper = styled.div<{ $show: boolean }>`
    width: fit-content;
    cursor: pointer;
    pointer-events: auto;
    transition: opacity 0.5s ease, display 0.5s ease;
    ${({ $show }) =>
        $show
            ? css`
                  display: block;
                  opacity: 1;
              `
            : css`
                  display: none;
                  opacity: 0;
              `}

    @media (max-width: 480px) {
        position: fixed;
        bottom: 0.25rem;
        left: 0.25rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        position: fixed;
        left: 0.75rem;
        bottom: 0.75rem;
    }
`;

export const StyledFlag = styled.div`
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    background-size: 100%;
    background-repeat: no-repeat;
    box-shadow: var(--primary-box-shadow) var(--primary-black-color);
    background-image: ${({ lang }) =>
        lang === 'kh'
            ? `url(${khorLogo})`
            : lang === 'us'
            ? `url(${usLogo})`
            : lang === 'ru'
            ? `url(${ruLogo})`
            : `url(${tjLogo})`};

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
        margin-bottom: 0.25rem;
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
