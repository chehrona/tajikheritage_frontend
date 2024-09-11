import React, { useState, useRef, useCallback } from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Helper
import alertMessages from '../../../miscellaneous/alertMessages.json';
import staticTexts from '../../../miscellaneous/staticTexts.json';

// Types
import { EntryDetails, SearchBarProps } from './types/componentTypes';

// Styled components
import {
    SearchContainer,
    InputWrapper,
    InputField,
    StyledSearchIcon,
    StyledClearIcon,
    InputAlert,
    StyledIconButton,
} from './searchBarStyles';

const SearchBar: React.FC<SearchBarProps> = ({ items, setItems, allItems }) => {
    const { lang } = useGlobalData();
    const [noMatch, setNoMatch] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearch = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setNoMatch(false);
            const enteredValue = e.currentTarget.value;

            if (enteredValue.length > 0) {
                const lowerEnteredValue = enteredValue.toLowerCase();
                const filtered = items?.filter((entry: EntryDetails) =>
                    entry?.tags?.some((tag: string) => {
                        const lowerTagValue = tag.toLowerCase();
                        return (
                            lowerTagValue.includes(lowerEnteredValue) ||
                            lowerEnteredValue.includes(lowerTagValue)
                        );
                    }),
                );

                if (filtered.length > 0) {
                    setItems(filtered);
                    setNoMatch(false);
                } else {
                    setNoMatch(true);
                    setItems(allItems);
                }
            } else {
                setItems(allItems);
            }

            setValue(enteredValue);
        },
        [],
    );

    const handleClear = useCallback(() => {
        setValue('');
        setNoMatch(false);
        setItems(allItems);

        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [allItems, setItems]);

    return (
        <SearchContainer>
            <InputWrapper>
                <StyledSearchIcon />
                <InputField
                    ref={inputRef}
                    placeholder={staticTexts.SEARCH_BAR_PLACEHOLDER[lang]}
                    value={value}
                    onChange={(e) => handleSearch(e)}
                />
                {value.length ? (
                    <StyledIconButton onClick={handleClear}>
                        <StyledClearIcon />
                    </StyledIconButton>
                ) : null}
            </InputWrapper>
            {noMatch && (
                <InputAlert>{alertMessages.SEARCH_NOT_FOUND[lang]}</InputAlert>
            )}
        </SearchContainer>
    );
};

export default SearchBar;
