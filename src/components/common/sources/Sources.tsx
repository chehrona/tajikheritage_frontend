import React, { useState } from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Types
import { Source } from './types/componentTypes';
import { TitleHeaderProps } from './types/componentTypes';

// Helper
import titleHeaderJson from '../../../miscellaneous/staticTexts.json';

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

const Sources: React.FC<{ data: Source[] }> = ({ data }) => {
    const { lang } = useGlobalData();
    const titleHeader: TitleHeaderProps = titleHeaderJson;
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    function handleClickAway() {
        setIsDropdownOpen(false);
    }

    return (
        <MainContainer>
            <ClickAwayListener onClickAway={handleClickAway}>
                <DropDownContainer>
                    <OrnateLine
                        setIsDropdownOpen={setIsDropdownOpen}
                        isDropdownOpen={isDropdownOpen}
                    />
                    <RefContainer $open={isDropdownOpen}>
                        <RefWrapper $open={isDropdownOpen}>
                            <SubTitle>
                                {titleHeader.SOURCES_HEADER[lang]}
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
};

export default Sources;
