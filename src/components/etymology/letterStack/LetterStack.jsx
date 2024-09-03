import React, { useEffect, useRef, useState } from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Helper
import placeholder from '../../../miscellaneous/staticTexts.json';
import alert from '../../../miscellaneous/alertMessages.json';

// Components
import VerticalLetters from '../letterShapes/VerticalLetters';
import OvalLetters from '../letterShapes/OvalLetters';
import CircleLetters from '../letterShapes/CircleLetters';
import Instruction from '../letterShapes/Instruction';
import Alert from '../../common/alert/Alert';

// Styled components
import { LetterContainer } from './letterStackStyles';
import {
    SearchContainer,
    InputWrapper,
    StyledSearchIcon,
    InputField,
    InputAlert,
    StyledIconButton,
    StyledClearIcon,
} from '../../common/searchBar/searchBarStyles';

export default function LetterStack({
    setItems,
    allItems,
    isDropdownOpen,
    setIsDropdownOpen,
}) {
    const { lang } = useGlobalData();
    const [noMatch, setNoMatch] = useState(false);
    const [error, setError] = useState(false);
    const [value, setValue] = useState('');
    const inputRef = useRef(null);

    const filterItems = (input) => {
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
            setIsDropdownOpen(true);

            if (input.length === 1 && input === input.toUpperCase()) {
                setError(true);
            } else {
                setNoMatch(true);
            }
        }
    };

    const handleSearch = (e) => {
        const enteredValue = e.currentTarget.value;

        setNoMatch(false);
        setError(false);
        setValue(enteredValue);
    };

    const handleClick = (char) => {
        setNoMatch(false);
        setError(false);
        setValue(char);
    };

    useEffect(() => {
        if (value.length > 0) {
            filterItems(value);
        } else {
            setItems(allItems);
            setIsDropdownOpen(true);
        }
    }, [value]);

    const handleClear = () => {
        setValue('');
        setNoMatch(false);
        setError(false);
        setItems(allItems);
        inputRef.current.focus();
    };

    return (
        <>
            <SearchContainer>
                <InputWrapper>
                    <StyledSearchIcon />
                    <InputField
                        ref={inputRef}
                        placeholder={placeholder.SEARCH_BAR_PLACEHOLDER[lang]}
                        value={value}
                        onChange={handleSearch}
                    />
                    {value.length ? (
                        <StyledIconButton onClick={handleClear}>
                            <StyledClearIcon />
                        </StyledIconButton>
                    ) : null}
                </InputWrapper>
                {noMatch && (
                    <InputAlert>{alert.SEARCH_NOT_FOUND[lang]}</InputAlert>
                )}
            </SearchContainer>
            {isDropdownOpen ? (
                <LetterContainer>
                    <OvalLetters
                        open={isDropdownOpen}
                        handleClick={handleClick}
                    />
                    <VerticalLetters
                        open={isDropdownOpen}
                        handleClick={handleClick}
                    />
                    <CircleLetters
                        open={isDropdownOpen}
                        handleClick={handleClick}
                    />
                    <Instruction open={isDropdownOpen} />
                </LetterContainer>
            ) : null}
            {error && <Alert message={alert.WORDS_NOT_FOUND} type={'error'} />}
        </>
    );
}
