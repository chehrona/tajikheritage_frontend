import React, { useEffect, useState, useMemo } from 'react';

// Hooks
import { useGlobalData } from '../../App';
import { useLocation } from 'react-router-dom';

// Helper
import staticText from '../../miscellaneous/staticTexts.json';

// Services
import { requestPage, requestMiddlePage } from '../../services/request';

// Components
import Fade from '../../components/common/transition/Fade';
import Loader from '../../components/common/loader/Loader';
import Alert from '../../components/common/alert/Alert';
import WordCard from '../../components/etymology/wordCard/WordCard';
import LetterStack from '../../components/etymology/letterStack/LetterStack';

// Styled components
import {
    CardsContainer,
    PageTitle,
    PageFirstContainer,
} from './etymologyStyles';

const compareArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    return arr1.every((value, index) => value === arr2[index]);
};

function EtymologyPage() {
    const location = useLocation();
    const { lang, title, setTitle } = useGlobalData();
    const [items, setItems] = useState([]);
    const [allItems, setAllItems] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(true);

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await requestMiddlePage('language/all_words');

            setItems(data);
            setAllItems(data);

            // Setting the title
            const headerData = await requestPage('language');

            let tempHeader = { ...title };

            headerData.forEach((entry) => {
                entry.sections.forEach((section) => {
                    if (section.link === 'etymology') {
                        for (const key in title) {
                            let titleArr = [...title[key]];

                            // New title
                            const newItem = [
                                `${headerData[0].header[key].toUpperCase()}`,
                                `${section?.title[key]}`,
                            ];

                            titleArr[1] = newItem;

                            tempHeader[key] = titleArr;
                        }
                    }
                });
            });

            setTitle(tempHeader);
        } catch (error) {
            console.error('An error occurred in fetchData:', error);

            if (error.response) {
                if (
                    error.response.status === 404 ||
                    error.response.status === 500
                ) {
                    setError(error.response.data.message);
                }
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Get data
        fetchData();
    }, [location.pathname, lang]);

    const areArraysEqual = useMemo(
        () => compareArrays(items, allItems),
        [items, allItems],
    );

    return (
        <>
            <Loader inProp={loading} />
            {!loading && items.length > 0 ? (
                <Fade inProp={!loading}>
                    <PageFirstContainer>
                        <PageTitle>
                            {staticText.ETYM_PAGE_HEADER[lang]}
                        </PageTitle>
                        <LetterStack
                            items={items}
                            setItems={setItems}
                            allItems={allItems}
                            noChange={areArraysEqual}
                            isDropdownOpen={isDropdownOpen}
                            setIsDropdownOpen={setIsDropdownOpen}
                        />
                        {!isDropdownOpen && !areArraysEqual && (
                            <CardsContainer center={items.length % 3 === 0}>
                                {items.map((item, i) => {
                                    return (
                                        <WordCard
                                            i={i}
                                            key={item.key}
                                            data={item}
                                        />
                                    );
                                })}
                            </CardsContainer>
                        )}
                    </PageFirstContainer>
                </Fade>
            ) : (
                !loading &&
                error[lang]?.length > 0 && (
                    <Alert message={error} type={'error'} />
                )
            )}
        </>
    );
}

export default EtymologyPage;
