import React, { useEffect, useState } from 'react';

// Hooks
import { useGlobalData } from '../../App';
import { useLocation } from 'react-router-dom';

// Material UI
import { ArrowForwardIos } from '@mui/icons-material';

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

// Styled components
import {
    PageContainer,
    InnerBoxContainer,
    FooterTitle,
    ArticleContainer,
    ArticleWrapper,
    WordTitle,
    WordDesc,
    LinkBox,
    Instruction,
    StyledLink,
    Arrow,
    TextContainer,
    Subtitle,
    FirstBox,
    TextWrapper,
    PageTitle,
} from './etymologyStyles';

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
                        <TextContainer>
                            {etymArticle?.desc[lang].map((entry, i) => {
                                return (
                                    <TextWrapper key={`etym_${lang}_${i}`}>
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
                            <ArticleContainer>
                                {items.map((item, i) => {
                                    return (
                                        <ArticleWrapper key={item.key}>
                                            <WordTitle>
                                                {item.title[lang]}
                                            </WordTitle>
                                            <WordDesc
                                                dangerouslySetInnerHTML={{
                                                    __html: item,
                                                }}
                                            ></WordDesc>
                                            <LinkBox to={item?.id}>
                                                <Instruction>
                                                    {lang === 'us'
                                                        ? 'Read article'
                                                        : lang === 'ru'
                                                        ? 'Читать статью'
                                                        : 'Мақоларо хонед'}
                                                </Instruction>
                                                <StyledLink>
                                                    <Arrow>
                                                        <ArrowForwardIos />
                                                    </Arrow>
                                                </StyledLink>
                                            </LinkBox>
                                        </ArticleWrapper>
                                    );
                                })}
                            </ArticleContainer>
                        </InnerBoxContainer>
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
