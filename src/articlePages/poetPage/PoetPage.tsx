import React, { useCallback, useEffect, useState } from 'react';

// Hooks
import { useLocation, useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useGlobalData } from '../../hooks/useGlobalData';
import { useSetHeader } from '../../hooks/useSetHeader';

// Types
import { PoetData } from './types/componentTypes';

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
import PageFirstContainer from '../../components/common/pageFirstContainer/PageFirstContainer';
import TextListContainer from '../../components/common/textListContainer/TextListContainer';

const PoetPage: React.FC = () => {
    const { id } = useParams();
    const location = useLocation();
    const { lang } = useGlobalData();
    const [poet, setPoet] = useState<PoetData>();
    const [error, setError] = useState({});
    const [loading, setLoading] = useState<boolean>(false);
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    const fetchData = async () => {
        try {
            setLoading(true);

            if (!id) {
                return;
            }

            const data = await requestArticleInfo(id, 'language/poet');
            setPoet(data);
        } catch (error: unknown) {
            // if (error.response) {
            //     if (
            //         error.response.status === 404 ||
            //         error.response.status === 500
            //     ) {
            //         setError(error.response.data.message);
            //     }
            // }
        } finally {
            setLoading(false);
        }
    };

    // Set page title
    useSetHeader('poets', 'generic', poet);

    useEffect(() => {
        // Get data
        fetchData();
    }, [location.pathname, lang]);

    const scrollToView = useCallback((e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        const target = e.currentTarget.getAttribute('data');
        const parent = document.querySelector('.content-container');

        if (parent && target) {
            const targetElement = document.querySelector(target) as HTMLElement;

            if (targetElement) {
                parent.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth',
                });
            }
        }
    }, []);

    return (
        <>
            <Loader inProp={loading} />
            {!loading && poet ? (
                <Fade inProp={!loading}>
                    <PageFirstContainer>
                        <TextListContainer height={40}>
                            <PoetIntro
                                poet={poet}
                                scrollToView={scrollToView}
                            />
                            {isMobile && (
                                <SectionOptions
                                    sections={poet.sections}
                                    scrollToView={scrollToView}
                                />
                            )}
                            <PoetBio bioData={poet?.bio} />
                            <PoetWorks works={poet?.works[lang]} />
                            <PoetMovies movies={poet?.movies[lang]} />
                            <PoetCareer points={poet?.career} />
                            <PoetAwards awards={poet?.awards[lang]} />
                            <Sources data={poet?.references[lang]} />
                        </TextListContainer>
                    </PageFirstContainer>
                </Fade>
            ) : // !loading &&
            // error[lang]?.length > 0 && (
            //     <Alert message={error} type={'error'} />
            // )
            null}
        </>
    );
};

export default PoetPage;
