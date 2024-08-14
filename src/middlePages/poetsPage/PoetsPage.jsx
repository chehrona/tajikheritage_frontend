import React, { useEffect, useState } from 'react';

// Hooks
import { useGlobalData } from '../../App';
import { useLocation } from 'react-router-dom';

// Services
import { requestPage, requestMiddlePage } from '../../services/request';

// Components
import PoetCard from '../../components/poet/poetCard/PoetCard';
import Fade from '../../components/common/transition/Fade';
import Loader from '../../components/common/loader/Loader';
import SearchBar from '../../components/common/searchBar/SearchBar';

// Styled components
import { PageContainer, PoetBoxContainer } from './poetsPageStyles';

function PoetsPage() {
    const location = useLocation();
    const { lang, title, setTitle } = useGlobalData();
    const [poets, setPoets] = useState([]);
    const [allItems, setAllItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState('');

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await requestMiddlePage('language/all_poets');
            setPoets(data);
            setAllItems(data);

            // Setting the title
            const headerData = await requestPage('language');

            let tempHeader = { ...title };

            headerData.forEach((entry) => {
                entry.sections.forEach((section) => {
                    if (section.link === 'poets') {
                        for (const key in title) {
                            let titleArr = [...title[key]];

                            // New title
                            const newItem = [
                                `${headerData[0].header[key].toUpperCase()}`,
                                `${section.title[key]}`,
                            ];

                            titleArr[1] = newItem;

                            tempHeader[key] = titleArr;
                        }
                    }
                });
            });

            setTitle(tempHeader);
        } catch (error) {
            console.error('Error fetching data:', error);
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
            {poets && (
                <Fade inProp={!loading}>
                    <PageContainer justify={poets?.length}>
                        <SearchBar
                            items={poets}
                            setItems={setPoets}
                            allItems={allItems}
                            setValue={setValue}
                            value={value}
                        />
                        <PoetBoxContainer>
                            {poets?.map((poet, i) => {
                                return <PoetCard key={i} poet={poet} i={i} />;
                            })}
                        </PoetBoxContainer>
                    </PageContainer>
                </Fade>
            )}
        </>
    );
}

export default PoetsPage;
