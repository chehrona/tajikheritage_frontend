import React, { useEffect, useState } from 'react';

// Hooks
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useGlobalData } from '../../App';

// Services
import { requestArticleInfo } from '../../services/request';

// Sections
import PoetBio from '../../components/poet/poetBio/PoetBio';
import PoetIntro from '../../components/poet/poetIntro/PoetIntro';
import PoetWorks from '../../components/poet/poetWorks/PoetWorks';
import PoetCareer from '../../components/poet/poetCareer/PoetCareer';
import PoetAwards from '../../components/poet/poetAwards/PoetAwards';
import PoetMovies from '../../components/poet/poetMovies/PoetMovies';
import Sources from '../../components/common/sources/Sources';
import SectionOptions from '../../components/poet/sectionOptions/SectionOptions';

// Components
import Loader from '../../components/common/loader/Loader';
import Fade from '../../components/common/transition/Fade';
import Alert from '../../components/common/alert/Alert';

// Styled components
import { PageContainer, PoetContainer } from './poetPageStyles';

export default function PoetPage() {
    const { id } = useParams();
    const { lang } = useGlobalData();
    const [poet, setPoet] = useState();
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await requestArticleInfo(id, 'language/poets');
            setPoet(data);
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
    }, []);

    const scrollToView = (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('data');
        const parent = document.querySelector('.content-container');

        if (parent) {
            parent.scrollTo({
                top: document.querySelector(target).offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            <Loader inProp={loading} />
            {!loading && poet ? (
                <Fade inProp={!loading}>
                    <PageContainer>
                        <PoetContainer>
                            <PoetIntro
                                poet={poet}
                                scrollToView={scrollToView}
                            />
                            {isMobile && (
                                <SectionOptions
                                    poet={poet}
                                    scrollToView={scrollToView}
                                />
                            )}
                            <PoetBio poet={poet} />
                            <PoetWorks poet={poet?.works} />
                            <PoetMovies poet={poet?.movies} />
                            <PoetCareer points={poet?.career} />
                            <PoetAwards poet={poet?.awards} />
                            <Sources
                                data={poet?.references[lang]}
                                line={'#504221d1'}
                                color={'#dedbdb'}
                                title={'#fcf6e9'}
                                background={'#0F0A00'}
                            />
                        </PoetContainer>
                    </PageContainer>
                </Fade>
            ) : (
                !loading && <Alert message={error} />
            )}
        </>
    );
}
