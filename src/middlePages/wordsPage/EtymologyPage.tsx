import React, { useState } from 'react';

// Hooks
import { useGlobalData } from '../../hooks/useGlobalData';
import { useSetHeader } from '../../hooks/useSetHeader';

// Helper
import staticText from '../../miscellaneous/language/etymologyPage.json';

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
import SearchBar from '../../components/common/searchBar/SearchBar';

const EtymologyPage: React.FC<{ page: string }> = ({ page }) => {
    const { lang } = useGlobalData();
    const [value, setValue] = useState<string>('');
    const [items, setItems] = useState<CardType[]>([]);

    // Set page title
    useSetHeader(page, 'middle', items);

    return (
        <AppLayout>
            <LandingPageFirstContainer>
                <PageTitle>{staticText.ETYM_PAGE_HEADER[lang]}</PageTitle>
                <SearchBar
                    externalValue={value}
                    setItems={setItems}
                    page={page}
                />
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
