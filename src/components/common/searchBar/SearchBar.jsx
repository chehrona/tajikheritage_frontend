import React, { useState } from 'react';

// Hooks
import { useSetLang } from '../../../App';

// Helper
import { placeholder, alert } from './helper';

// Components
import {
    SearchContainer,
    InputWrapper,
    InputField,
    StyledSearchIcon,
    InputAlert,
} from './searchBarStyles';

export default function SearchBar({ items, setItems, allItems }) {
    const { lang } = useSetLang();
    const [value, setValue] = useState('');
    const [noMatch, setNoMatch] = useState(false);

    const handleSearch = (e) => {
        setNoMatch(false);
        const enteredValue = e.currentTarget.value.toLowerCase();

        if (enteredValue.length > 0) {
            const filtered = items?.filter((entry) => {
                const nameCopy = { ...entry.name };

                for (const key in nameCopy) {
                    if (
                        nameCopy.hasOwnProperty(key) &&
                        Array.isArray(nameCopy[key])
                    ) {
                        nameCopy[key] = nameCopy[key].join(' ');
                    }
                }

                return Object.values(nameCopy).some((name) =>
                    name.toLowerCase().includes(enteredValue),
                );
            });

            if (filtered.length > 0) {
                setItems(filtered);
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
                    placeholder={placeholder[lang]}
                    value={value}
                    onChange={(e) => handleSearch(e)}
                />
            </InputWrapper>
            {noMatch && <InputAlert>{alert[lang]}</InputAlert>}
        </SearchContainer>
    );
}
