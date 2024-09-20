import React, { useState, useRef } from 'react';

// Hooks
import { useGlobalData } from '../../../App';

// Helper
import alert from '../../../miscellaneous/alertMessages.json';
import staticText from '../../../miscellaneous/staticTexts.json';

// Components
import {
    SearchContainer,
    InputWrapper,
    InputField,
    StyledSearchIcon,
    StyledClearIcon,
    InputAlert,
    StyledIconButton,
} from './searchBarStyles';

export default function SearchBar({ items, setItems, allItems }) {
    const { lang } = useGlobalData();
    const [noMatch, setNoMatch] = useState(false);
    const [value, setValue] = useState('');
    const inputRef = useRef(null);

    const handleSearch = (e) => {
        setNoMatch(false);
        const enteredValue = e.currentTarget.value;

        if (enteredValue.length > 0) {
            const lowerEnteredValue = enteredValue.toLowerCase();
            const filtered = items?.filter((entry) =>
                entry?.tags?.some((tag) => {
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
    };

    const handleClear = () => {
        setValue('');
        setNoMatch(false);
        setItems(allItems);
        inputRef.current.focus();
    };

    return (
        <SearchContainer>
            <InputWrapper>
                <StyledSearchIcon />
                <InputField
                    ref={inputRef}
                    placeholder={staticText.SEARCH_BAR_PLACEHOLDER[lang]}
                    value={value}
                    onChange={(e) => handleSearch(e)}
                />
                {value.length ? (
                    <StyledIconButton onClick={handleClear}>
                        <StyledClearIcon />
                    </StyledIconButton>
                ) : null}
            </InputWrapper>
            {noMatch && <InputAlert>{alert.SEARCH_NOT_FOUND[lang]}</InputAlert>}
        </SearchContainer>
    );
}
