import React, { useState, useEffect, useCallback } from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';
import { useLocation } from 'react-router-dom';

// Helper
import staticText from '../../../miscellaneous/staticTexts.json';

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
    const { lang, setLang } = useGlobalData();

    // Don't show the header
    const noShow = location.pathname.includes('print');

    const showLangOptions = useCallback(() => {
        setShowLangMenu(true);
    }, []);

    const changeLang = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            const iconTitle = e.currentTarget.getAttribute(
                'data',
            ) as Langs | null;
            if (
                iconTitle &&
                (iconTitle === 'us' ||
                    iconTitle === 'ru' ||
                    iconTitle === 'tj' ||
                    iconTitle === 'fa')
            ) {
                setLang(iconTitle);
                setShowLangMenu(false);
            }
        },
        [setLang],
    );

    const handleClickAway = useCallback(() => {
        setShowLangMenu(false);
    }, []);

    useEffect(() => {
        localStorage.setItem('lang', lang);
    }, [lang]);

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <FlagWrapper $show={!noShow}>
                <FlagDropdown $showLangMenu={showLangMenu}>
                    {lang !== 'us' && (
                        <StyledIconButton data="us" onClick={changeLang}>
                            <StyledTooltip
                                title={staticText.LANGS['us']}
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
                                title={staticText.LANGS['tj']}
                                placement="right"
                                arrow
                            >
                                <span>
                                    <StyledFlag lang={'tj'}></StyledFlag>
                                </span>
                            </StyledTooltip>
                        </StyledIconButton>
                    )}
                    {/* {lang !== 'fa' && (
                        <StyledIconButton data="fa" onClick={changeLang}>
                            <StyledTooltip
                                title={staticText.LANGS['fa']}
                                placement="right"
                                arrow
                            >
                                <span>
                                    <StyledFlag lang={'tj'}></StyledFlag>
                                </span>
                            </StyledTooltip>
                        </StyledIconButton>
                    )} */}
                    {lang !== 'ru' && (
                        <StyledIconButton data="ru" onClick={changeLang}>
                            <StyledTooltip
                                title={staticText.LANGS['ru']}
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
                        title={staticText.LANGS[lang]}
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
