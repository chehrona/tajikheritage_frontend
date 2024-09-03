import React, { useEffect, useState } from 'react';

// Hooks
import { useGlobalData } from '../../hooks/useGlobalData';
import { useLocation } from 'react-router-dom';
import { useHeader } from '../../hooks/useHeader';

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

// Types
import { ErrorTypes } from '../../appTypes';

// Styled components
import { CardsContainer, PageTitle } from './etymologyStyles';
import { PageContainer } from '../middlePage/middlePageStyles';

function EtymologyPage() {
    const location = useLocation();
    const { lang, title } = useGlobalData();
    const [items, setItems] = useState([]);
    const [allItems, setAllItems] = useState([]);
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(true);

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await requestMiddlePage('language/all_words');

            setItems(data);
            setAllItems(data);
        } catch (error: unknown) {
            const customError = error as ErrorTypes;

            if (customError.response) {
                if (
                    customError.response.status === 404 ||
                    customError.response.status === 500
                ) {
                    setError(customError.response.data.message);
                }
            }
        } finally {
            setLoading(false);
        }
    };

    // Set page title
    // useHeader('etymology', items, title);

    useEffect(() => {
        // Get data
        fetchData();
    }, [location.pathname, lang]);

    return (
        <>
            <Loader inProp={loading} />
            {!loading && items.length > 0 ? (
                <Fade inProp={!loading}>
                    <PageContainer>
                        <PageTitle>
                            {staticText.ETYM_PAGE_HEADER[lang]}
                        </PageTitle>
                        <LetterStack
                            setItems={setItems}
                            allItems={allItems}
                            isDropdownOpen={isDropdownOpen}
                            setIsDropdownOpen={setIsDropdownOpen}
                        />
                        {!isDropdownOpen && (
                            <CardsContainer center={items.length % 3 === 0}>
                                {items.map((item, i) => {
                                    return (
                                        <WordCard
                                            i={i}
                                            // key={item._id}
                                            data={item}
                                        />
                                    );
                                })}
                            </CardsContainer>
                        )}
                    </PageContainer>
                </Fade>
            ) : (
                !loading &&
                error !== undefined && <Alert message={error} type={'error'} />
            )}
        </>
    );
}

export default EtymologyPage;
