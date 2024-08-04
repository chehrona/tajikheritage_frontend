import React, { useEffect, useState } from 'react';

// Hooks
import { useGlobalData } from '../../App';
import { useLocation } from 'react-router-dom';

// Services
import { requestPage, requestMiddlePage } from '../../services/request';

// Components
import SquareCard from '../../components/common/squareCard/SquareCard';
import Fade from '../../components/common/transition/Fade';
import Loader from '../../components/common/loader/Loader';
import Alert from '../../components/common/alert/Alert';
import SearchBar from '../../components/common/searchBar/SearchBar';

// Styled components
import { PageContainer, InnerBoxContainer } from './middlePageStyles';

function MiddlePage({ page }) {
    const location = useLocation();
    const { lang, title, setTitle } = useGlobalData();
    const [items, setItems] = useState([]);
    const [allItems, setAllItems] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await requestMiddlePage(page);

            setItems(data);
            setAllItems(data);

            // Setting the title
            const headerData = await requestPage(
                page.substring(0, page.indexOf('/')),
            );

            let tempHeader = { ...title };

            headerData.forEach((entry) => {
                entry.sections.forEach((section) => {
                    if (
                        section.link === page.substring(page.indexOf('_') + 1)
                    ) {
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
                        <SearchBar
                            items={items}
                            setItems={setItems}
                            allItems={allItems}
                        />
                        <InnerBoxContainer center={items.length % 3 === 0}>
                            {items.map((item, i) => (
                                <SquareCard key={i} item={item} i={i} />
                            ))}
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

export default MiddlePage;
