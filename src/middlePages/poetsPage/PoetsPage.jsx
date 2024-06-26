import React, { useEffect, useState } from 'react';

// Services
import { requestMiddlePage } from '../../services/request';

// Components
import PoetCard from '../../components/poet/poetCard/PoetCard';
import Fade from '../../components/common/transition/Fade';
import Loader from '../../components/common/loader/Loader';
import SearchBar from '../../components/common/searchBar/SearchBar';

// Styled components
import { PageContainer, PoetBoxContainer } from './poetsPageStyles';

function PoetsPage() {
    const [poets, setPoets] = useState([]);
    const [allItems, setAllItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await requestMiddlePage('language/poets');
            setPoets(data);
            setAllItems(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Get data
        fetchData();
    }, []);

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
        // <TempPageContainer>
        //     <TempTitle>
        //         {
        //             lang === "us" ? "Exciting updates are on the way!" : (
        //             lang === "ru" ? "Обновления уже в пути!" :
        //             "Навигариҳо дар роҳ ҳастанд!")
        //         }
        //     </TempTitle>
        //     <TempImg src={'/loader.png'} />
        // </TempPageContainer>
    );
}

export default PoetsPage;
