import React, { useEffect, useState } from 'react';

// Hooks
import { useLocation, useParams } from 'react-router-dom';
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

// Components
import Alert from '../../components/common/alert/Alert';
import PageFirstContainer from '../../components/common/pageWrapper/ArticlePageFirstContainer';
import PageInnerContainer from '../../components/common/pageInnerContainer/PageInnerContainer';

const PoetPage: React.FC<{ page: string }> = ({ page }) => {
    const { id } = useParams();
    const location = useLocation();
    const { lang, setIsLoading } = useGlobalData();
    const [poet, setPoet] = useState<PoetData>();
    const [error, setError] = useState({});

    const fetchData = async () => {
        try {
            setIsLoading(true);

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
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 550);

            return () => clearTimeout(timer);
        }
    };

    // Set page title
    useSetHeader(page, 'generic', poet);

    useEffect(() => {
        // Get data
        fetchData();
    }, [location.pathname]);

    const scrollToView = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.preventDefault();

        const target = e.currentTarget.getAttribute('data-id');
        const parent = document.querySelector('.content-container');

        if (parent && target) {
            const targetElement = document.querySelector(
                target,
            ) as HTMLDivElement;

            if (targetElement) {
                parent.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth',
                });
            }
        }
    };

    return (
        <>
            {poet ? (
                <PageFirstContainer>
                    <PageInnerContainer height={40}>
                        <PoetIntro poet={poet} scrollToView={scrollToView} />
                        <PoetBio bioData={poet?.bio} />
                        <PoetWorks works={poet?.works[lang]} />
                        <PoetMovies movies={poet?.movies[lang]} />
                        <PoetCareer points={poet?.career} />
                        <PoetAwards awards={poet?.awards[lang]} />
                        <Sources data={poet?.references[lang]} />
                    </PageInnerContainer>
                </PageFirstContainer>
            ) : null}
        </>
    );
};

export default PoetPage;
