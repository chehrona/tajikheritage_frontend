import React, { useState } from 'react';
import { useSetLang } from '../../../App';
import { IconButton, ClickAwayListener } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';

import {
    DropDownContainer,
    IconContainer,
    Line,
    RefContainer,
    StyledDownIcon,
    Reference,
    SubTitle,
    StyledUpIcon,
    RefWrapper,
    RefBox,
    RefIndex,
    SourceLink,
    MainContainer,
    SourceWrapper,
} from './sourceStyles';

export default function Sources({ data, color, title, background }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(0);
    const { lang } = useSetLang();

    function handleClickAway() {
        setIsDropdownOpen(0);
    }

    return (
        <MainContainer>
            <ClickAwayListener onClickAway={handleClickAway}>
                <DropDownContainer>
                    <IconContainer>
                        <Line right={1} />
                        <IconButton
                            onClick={() =>
                                setIsDropdownOpen((prevState) => !prevState)
                            }
                        >
                            {isDropdownOpen ? (
                                <StyledUpIcon />
                            ) : (
                                <StyledDownIcon />
                            )}
                        </IconButton>
                        <Line right={0} />
                    </IconContainer>
                    <RefContainer
                        open={isDropdownOpen}
                        color={color}
                        background={background}
                    >
                        <RefWrapper open={isDropdownOpen}>
                            <SubTitle title={title}>
                                {lang === 'ru'
                                    ? 'Литература'
                                    : lang === 'tj'
                                    ? 'Адабиёт'
                                    : 'References'}
                            </SubTitle>
                            {data.map((source, i) => {
                                return (
                                    <RefBox key={i}>
                                        <RefIndex>
                                            <div>{i + 1}.</div>
                                        </RefIndex>
                                        <SourceWrapper>
                                            <Reference
                                                dangerouslySetInnerHTML={{
                                                    __html: source?.name,
                                                }}
                                            />
                                            {source?.link.length ? (
                                                <SourceLink
                                                    href={source?.link}
                                                    target="_blank"
                                                >
                                                    <OpenInNew />
                                                </SourceLink>
                                            ) : null}
                                        </SourceWrapper>
                                    </RefBox>
                                );
                            })}
                        </RefWrapper>
                    </RefContainer>
                </DropDownContainer>
            </ClickAwayListener>
        </MainContainer>
    );
}
