import React, { useEffect, useState, useMemo } from 'react';

// Hooks
import { useGlobalData } from '../../App';
import { useLocation } from 'react-router-dom';

// Helper
import { etymArticle } from './helper';

// Services
import { requestPage, requestMiddlePage } from '../../services/request';

// Components
import Fade from '../../components/common/transition/Fade';
import Loader from '../../components/common/loader/Loader';
import Alert from '../../components/common/alert/Alert';
import SearchBar from '../../components/common/searchBar/SearchBar';
import { DescWrapper } from '../../components/common/descWrapper/DescWrapper';
import ArticleCard from './components/ArticleCard';

// Styled components
import {
    PageContainer,
    InnerBoxContainer,
    FooterTitle,
    ArticleContainer,
    TextContainer,
    Subtitle,
    FirstBox,
    TextWrapper,
    PageTitle,
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
                    <PageContainer>
                        <PageTitle>
                            {lang === 'us'
                                ? 'Which Word Would You Like to Explore?'
                                : lang === 'ru'
                                ? 'Какое слово вы хотели бы изучить?'
                                : 'Кадом калимаро омӯхтан мехоҳед?'}
                        </PageTitle>
                        <SearchBar
                            items={items}
                            setItems={setItems}
                            allItems={allItems}
                        />
                        {areArraysEqual ? (
                            <>
                                <TextContainer>
                                    {etymArticle?.desc[lang].map((entry, i) => {
                                        return (
                                            <TextWrapper
                                                key={`etym_${lang}_${i}`}
                                            >
                                                <Subtitle
                                                    dangerouslySetInnerHTML={{
                                                        __html: entry.subtitle,
                                                    }}
                                                ></Subtitle>
                                                <DescWrapper
                                                    desc={entry?.body}
                                                    TextWrapper={FirstBox}
                                                />
                                            </TextWrapper>
                                        );
                                    })}
                                </TextContainer>
                                <InnerBoxContainer>
                                    <FooterTitle>
                                        {lang === 'us'
                                            ? 'Latest words:'
                                            : lang === 'ru'
                                            ? 'Новые слова:'
                                            : 'Калимаҳои нав:'}
                                    </FooterTitle>
                                    <ArticleContainer
                                        center={allItems.length % 3 === 0}
                                    >
                                        {allItems.map((item, i) => {
                                            return (
                                                <ArticleCard
                                                    i={i}
                                                    key={item.key}
                                                    data={item}
                                                />
                                            );
                                        })}
                                    </ArticleContainer>
                                </InnerBoxContainer>
                            </>
                        ) : (
                            <ArticleContainer center={items.length % 3 === 0}>
                                {items.map((item, i) => {
                                    return (
                                        <ArticleCard
                                            i={i}
                                            key={item.key}
                                            data={item}
                                        />
                                    );
                                })}
                            </ArticleContainer>
                        )}
                    </PageContainer>
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
