import React, { useState, useEffect, useCallback } from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';
import { useLocation } from 'react-router-dom';

// Helper
import { langNames } from './langNames';

// Material UI
import { ClickAwayListener } from '@mui/material';

// Types
import { Langs } from '../../../appTypes';

// Styled components
import {
    StyledFlag,
    FlagWrapper,
    FlagDropdown,
    StyledIconButton,
    StyledTooltip,
} from './flagsStyles';

const Flags: React.FC = () => {
    const location = useLocation();
    const [showLangMenu, setShowLangMenu] = useState<boolean>(false);
    const { lang, setLang, setIsLoading } = useGlobalData();

    // Don't show the header
    const noShow = location.pathname.includes('print');

    const showLangOptions = useCallback(() => {
        setShowLangMenu(true);
    }, []);

    const changeLang = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            setIsLoading(true);

            const iconTitle = e.currentTarget.getAttribute(
                'data',
            ) as Langs | null;
            if (
                iconTitle &&
                (iconTitle === 'us' || iconTitle === 'ru' || iconTitle === 'tj')
            ) {
                setLang(iconTitle);
            }
            setShowLangMenu(false);
        },
        [setLang],
    );

    const handleClickAway = useCallback(() => {
        setShowLangMenu(false);
    }, []);

    useEffect(() => {
        localStorage.setItem('lang', lang);

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 550);

        return () => clearTimeout(timer);
    }, [lang]);

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <FlagWrapper $show={!noShow}>
                <FlagDropdown $showLangMenu={showLangMenu}>
                    {lang !== 'us' && (
                        <StyledIconButton data="us" onClick={changeLang}>
                            <StyledTooltip
                                title={langNames['us']}
                                placement="right"
                                arrow
                            >
                                <span>
                                    <StyledFlag lang={'us'}></StyledFlag>
                                </span>
                            </StyledTooltip>
                        </StyledIconButton>
                    )}
                    {lang !== 'tj' && (
                        <StyledIconButton data="tj" onClick={changeLang}>
                            <StyledTooltip
                                title={langNames['tj']}
                                placement="right"
                                arrow
                            >
                                <span>
                                    <StyledFlag lang={'tj'}></StyledFlag>
                                </span>
                            </StyledTooltip>
                        </StyledIconButton>
                    )}
                    {lang !== 'ru' && (
                        <StyledIconButton data="ru" onClick={changeLang}>
                            <StyledTooltip
                                title={langNames['ru']}
                                placement="right"
                                arrow
                            >
                                <span>
                                    <StyledFlag lang={'ru'}></StyledFlag>
                                </span>
                            </StyledTooltip>
                        </StyledIconButton>
                    )}
                </FlagDropdown>
                <StyledIconButton onMouseEnter={showLangOptions}>
                    <StyledTooltip
                        title={langNames[lang]}
                        placement="right"
                        arrow
                    >
                        <span>
                            <StyledFlag lang={lang}></StyledFlag>
                        </span>
                    </StyledTooltip>
                </StyledIconButton>
            </FlagWrapper>
        </ClickAwayListener>
    );
};

export default Flags;
