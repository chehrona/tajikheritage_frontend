import React, { useState } from 'react';

// Hooks
import { useGlobalData } from '../../../App';

// Helper
import staticText from '../../../miscellaneous/staticTexts.json';

// Material UI
import { ClickAwayListener } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';

// Components
import OrnateLine from '../ornateLine/OrnateLine';

// Styled components
import {
    DropDownContainer,
    RefContainer,
    Reference,
    SubTitle,
    RefWrapper,
    RefBox,
    RefIndex,
    SourceLink,
    MainContainer,
    SourceWrapper,
} from './sourceStyles';

export default function Sources({ data }) {
    const { lang } = useGlobalData();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    function handleClickAway() {
        setIsDropdownOpen(0);
    }

    return (
        <MainContainer>
            <ClickAwayListener onClickAway={handleClickAway}>
                <DropDownContainer>
                    <OrnateLine
                        setIsDropdownOpen={setIsDropdownOpen}
                        isDropdownOpen={isDropdownOpen}
                    />
                    <RefContainer open={isDropdownOpen}>
                        <RefWrapper open={isDropdownOpen}>
                            <SubTitle>
                                {staticText.SOURCES_HEADER[lang]}
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
