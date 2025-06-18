import React, { useState, useRef, useEffect } from 'react';

// Services
import { searchEntry } from '../../../services/searchRequest';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Helper
import alertMessages from '../../../miscellaneous/alertMessages.json';
import staticTexts from '../../../miscellaneous/staticTexts.json';

// Types
import { SearchBarProps } from './types/componentTypes';

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

const SearchBar: React.FC<SearchBarProps> = ({
    setItems,
    externalValue = '',
    page,
}) => {
    const { lang } = useGlobalData();
    const [noMatch, setNoMatch] = useState<boolean>(false);
    const [value, setValue] = useState<string>(externalValue);
    const inputRef = useRef<HTMLInputElement>(null);

    console.log(page, externalValue, 'page ******');

    useEffect(() => {
        if (value.length === 0) {
            setItems([]);
        } else if (value.length !== 1) {
            const delay = setTimeout(() => {
                searchEntry(value, page).then((data: any) => {
                    setItems(data);
                });
            }, 450);

            return () => clearTimeout(delay);
        }
    }, [value]);

    const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const enteredValue = e.currentTarget.value;

        setNoMatch(false);
        setValue(enteredValue);
    };

    // Reset value and focus input when clearing
    const handleClear = () => {
        setValue('');
        setNoMatch(false);
        setItems([]);

        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <SearchContainer>
            <InputWrapper>
                <StyledSearchIcon />
                <InputField
                    name="search_bar"
                    id="search_bar"
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
