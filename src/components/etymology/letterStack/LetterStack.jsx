import React, { useEffect, useState } from 'react';

// Hooks
import { useGlobalData } from '../../../App';
import { useMediaQuery } from 'react-responsive';

//Helper
import letters from '../../../miscellaneous/staticTexts.json';
import alert from '../../../miscellaneous/alertMessages.json';

// Styled components
import { LetterWrapper, LetterContainer } from './letterStackStyles';
import {
    SearchContainer,
    InputWrapper,
    StyledSearchIcon,
    InputField,
    InputAlert,
} from '../../common/searchBar/searchBarStyles';

export default function LetterStack({
    setItems,
    allItems,
    isDropdownOpen,
    setIsDropdownOpen,
}) {
    const { lang } = useGlobalData();
    const [noMatch, setNoMatch] = useState(false);
    const [value, setValue] = useState('');
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    const lettersToRender = isMobile
        ? letters.ETYM_PAGE_LETTERS.m
        : letters.ETYM_PAGE_LETTERS.d;

    const filterItems = (input) => {
        setNoMatch(false);

        const lowerEnteredValue = input.toLowerCase();

        const filtered = allItems?.filter((entry) =>
            entry?.tags?.some((tag) => {
                const lowerTagValue = tag.toLowerCase();

                if (lowerEnteredValue.length === 1) {
                    return lowerTagValue[0] === lowerEnteredValue;
                }

                return lowerTagValue.includes(lowerEnteredValue);
            }),
        );

        if (filtered.length > 0) {
            setItems(filtered);
            setIsDropdownOpen(false);
        } else {
            setItems(allItems);
            setNoMatch(true);
            setIsDropdownOpen(true);
        }
    };

    const handleClick = (letter) => {
        setValue(letter);
    };

    const handleSearch = (e) => {
        const enteredValue = e.currentTarget.value;

        setValue(enteredValue);
    };

    useEffect(() => {
        if (value.length > 0) {
            filterItems(value);
        } else {
            setItems(allItems);
            setNoMatch(false);
            setIsDropdownOpen(true);
        }
    }, [value]);

    return (
        <>
            <SearchContainer>
                <InputWrapper>
                    <StyledSearchIcon />
                    <InputField
                        value={value}
                        onChange={handleSearch}
                        placeholder={letters.SEARCH_BAR_PLACEHOLDER[lang]}
                    />
                </InputWrapper>
                {noMatch && (
                    <InputAlert>{alert.SEARCH_NOT_FOUND[lang]}</InputAlert>
                )}
            </SearchContainer>
            {isDropdownOpen ? (
                <LetterContainer>
                    {lettersToRender[lang].map((letter, index) => {
                        const {
                            position: { l: left, t: top },
                            shape,
                            char,
                        } = letter;

                        return (
                            <LetterWrapper
                                top={top}
                                left={left}
                                shape={shape}
                                open={isDropdownOpen}
                                onClick={() => handleClick(char)}
                                empty={char.startsWith('/storage')}
                                key={`${[lang]}_${char}_${index}`}
                            >
                                {char.startsWith('/storage') ? (
                                    <img
                                        alt="filler"
                                        shape={shape}
                                        src={
                                            process.env.REACT_APP_BASE_URL +
                                            char
                                        }
                                    />
                                ) : char === 'i' ? (
                                    <span>
                                        {lang === 'us'
                                            ? 'Click on a letter'
                                            : lang === 'ru'
                                            ? 'Нажмите на букву'
                                            : 'Ҳарферо зер кунед'}
                                    </span>
                                ) : (
                                    <span>{char}</span>
                                )}
                            </LetterWrapper>
                        );
                    })}
                </LetterContainer>
            ) : null}
        </>
    );
}
