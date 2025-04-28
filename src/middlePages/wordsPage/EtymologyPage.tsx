import React, { useState, useRef } from 'react';

// Hooks
import { useGlobalData } from '../../hooks/useGlobalData';
import { useSetHeader } from '../../hooks/useSetHeader';

// Helper
import staticText from '../../miscellaneous/language/etymologyPage.json';
import placeholder from '../../miscellaneous/staticTexts.json';
import alertMessages from '../../miscellaneous/alertMessages.json';

// Components
import AppLayout from '../../AppLayout';
import SquareCard from '../../components/common/squareCard/SquareCard';
import LetterStack from '../../components/etymology/letterStack/LetterStack';
import LandingPageFirstContainer from '../../components/common/pageWrapper/LandingPageFirstContainer';

// Types
import { CardType } from '../middlePage/types/componentTypes';

// Styled components
import { PageTitle } from './etymologyStyles';
import { InnerBoxContainer } from '../middlePage/middlePageStyles';
import {
    SearchContainer,
    InputWrapper,
    StyledSearchIcon,
    InputField,
    InputAlert,
    StyledIconButton,
    StyledClearIcon,
} from '../../components/common/searchBar/searchBarStyles';

const EtymologyPage: React.FC<{ page: string }> = ({ page }) => {
    const { lang } = useGlobalData();
    const [value, setValue] = useState<string>('');
    const [items, setItems] = useState<CardType[]>([]);
    const [noMatch, setNoMatch] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    // Set page title
    useSetHeader(page, 'middle', items);

    return (
        <AppLayout>
            <LandingPageFirstContainer>
                <PageTitle>{staticText.ETYM_PAGE_HEADER[lang]}</PageTitle>
                <SearchContainer>
                    <InputWrapper>
                        <StyledSearchIcon />
                        <InputField
                            id="searchbar"
                            ref={inputRef}
                            placeholder={
                                placeholder.SEARCH_BAR_PLACEHOLDER[lang]
                            }
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
                        <InputAlert>
                            {alertMessages.SEARCH_NOT_FOUND[lang]}
                        </InputAlert>
                    )}
                </SearchContainer>
                <React.Fragment>
                    {items.length > 0 ? (
                        <InnerBoxContainer $center={items.length % 3 === 0}>
                            {items.map((item) => (
                                <SquareCard key={item.id} data={item} />
                            ))}
                        </InnerBoxContainer>
                    ) : (
                        <LetterStack
                            page={page}
                            setValue={setValue}
                            setItems={setItems}
                        />
                    )}
                </React.Fragment>
            </LandingPageFirstContainer>
        </AppLayout>
    );
};

export default EtymologyPage;
