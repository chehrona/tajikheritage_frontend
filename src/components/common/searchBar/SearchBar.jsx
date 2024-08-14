import React, { useState } from 'react';

// Hooks
import { useGlobalData } from '../../../App';

// Helper
import alert from '../../../miscellaneous/alertMessages.json';
import placeholder from '../../../miscellaneous/staticTexts.json';

// Components
import {
    SearchContainer,
    InputWrapper,
    InputField,
    StyledSearchIcon,
    InputAlert,
} from './searchBarStyles';

export default function SearchBar({
    items,
    setItems,
    allItems,
    setValue,
    value,
}) {
    const { lang } = useGlobalData();
    const [noMatch, setNoMatch] = useState(false);

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

    return (
        <SearchContainer>
            <InputWrapper>
                <StyledSearchIcon />
                <InputField
                    placeholder={placeholder.SEARCH_BAR_PLACEHOLDER[lang]}
                    value={value}
                    onChange={(e) => handleSearch(e)}
                />
            </InputWrapper>
            {noMatch && <InputAlert>{alert.SEARCH_NOT_FOUND[lang]}</InputAlert>}
        </SearchContainer>
    );
}
