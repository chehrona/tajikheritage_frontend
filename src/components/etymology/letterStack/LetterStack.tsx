import React, { useEffect, useRef, useState, useCallback } from 'react';
import { toast } from 'react-toastify';

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

// Types
import { LetterStackProps } from './types/componentTypes';

// Styled components
import { LetterStackWrapper, LetterContainer } from './letterStackStyles';
import {
    SearchContainer,
    InputWrapper,
    StyledSearchIcon,
    InputField,
    InputAlert,
    StyledIconButton,
    StyledClearIcon,
} from '../../common/searchBar/searchBarStyles';

const LetterStack: React.FC<LetterStackProps> = ({
    setItems,
    allItems,
    isDropdownOpen,
    setIsDropdownOpen,
}) => {
    const { lang } = useGlobalData();
    const [noMatch, setNoMatch] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    // Memoized filter function
    const filterItems = useCallback(
        (input: string) => {
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
                    toast.error(alert.WORDS_NOT_FOUND[lang]);
                } else {
                    setNoMatch(true);
                }
            }
        },
        [allItems, setItems, setIsDropdownOpen],
    );

    const handleSearch = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const enteredValue = e.currentTarget.value;

            setNoMatch(false);
            setError(false);
            setValue(enteredValue);
        },
        [],
    );

    const handleClick = useCallback((char: string) => {
        setNoMatch(false);
        setError(false);
        setValue(char);
    }, []);

    // Reset value and focus input when clearing
    const handleClear = useCallback(() => {
        setValue('');
        setNoMatch(false);
        setError(false);
        setItems(allItems);

        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [allItems, setItems]);

    useEffect(() => {
        if (value.length > 0) {
            filterItems(value);
        } else {
            setItems(allItems);
            setIsDropdownOpen(true);
        }
    }, [value, filterItems, allItems, setItems, setIsDropdownOpen]);

    return (
        <>
            <SearchContainer>
                <InputWrapper>
                    <StyledSearchIcon />
                    <InputField
                        id="searchbar"
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
            <LetterStackWrapper>
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
            </LetterStackWrapper>
        </>
    );
};

export default LetterStack;
