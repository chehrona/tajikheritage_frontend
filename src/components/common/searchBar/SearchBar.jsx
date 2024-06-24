import React, { useState } from 'react';

// Hooks
import { useMediaQuery } from 'react-responsive';
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

export default function SearchBar({ items, setItems }) {
    const { lang } = useSetLang();
    const [value, setValue] = useState('');
    const [noMatch, setNoMatch] = useState(false);
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    const handleSearch = (e) => {
        setNoMatch(false);
        const enteredValue = e.currentTarget.value.toLowerCase();

        const filtered = items?.filter((entry) => {
            return Object.values(entry.name).some((name) =>
                name.toLowerCase().startsWith(enteredValue),
            );
        });

        if (filtered.length > 0) {
            setItems(filtered);
        } else {
            setNoMatch(true);
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
