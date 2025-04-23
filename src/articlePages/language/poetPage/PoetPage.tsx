import React, { useEffect, useState } from 'react';

// Hooks
import { useLocation, useParams } from 'react-router-dom';
import { useGlobalData } from '../../../hooks/useGlobalData';
import { useSetHeader } from '../../../hooks/useSetHeader';
import { useToasts } from '../../../hooks/useToasts';

// Types
import { PoetData } from './types/componentTypes';
import { ErrorResponse } from '../../../appTypes';

// Services
import { requestArticleInfo } from '../../../services/request';

// Sections
import PoetBio from '../../../components/poet/poetBio/PoetBio';
import PoetIntro from '../../../components/poet/poetIntro/PoetIntro';
import PoetWorks from '../../../components/poet/poetWorks/PoetWorks';
import PoetCareer from '../../../components/poet/poetCareer/PoetCareer';
import PoetAwards from '../../../components/poet/poetAwards/PoetAwards';
import PoetMovies from '../../../components/poet/poetMovies/PoetMovies';
import Sources from '../../../components/common/sources/Sources';

// Components
import ArticlePageFirstContainer from '../../../components/common/pageWrapper/ArticlePageFirstContainer';
import PageInnerContainer from '../../../components/common/pageInnerContainer/PageInnerContainer';
import AppLayout from '../../../AppLayout';
import PageNotFound from '../../../errorPages/pageNotFound/PageNotFound';

const PoetPage: React.FC<{ page: string }> = ({ page }) => {
    const { id } = useParams();
    const { showToast } = useToasts();
    const { pathname } = useLocation();
    const { lang } = useGlobalData();
    const [error, setError] = useState<number | null>(null);
    const [poet, setPoet] = useState<PoetData>();

    const fetchData = async () => {
        try {
            if (!id) {
                return;
            }

            const data = await requestArticleInfo(id, 'language/poet');
            setPoet(data);
        } catch (error: unknown) {
            const customError = error as ErrorResponse;

            if (customError.status === 404) {
                setError(404);
            } else if (customError.status === 500) {
                showToast('E_500', 'error', 'language/poet');
            }
        }
    };

    // Set page title
    useSetHeader(page, 'generic', poet);

    useEffect(() => {
        // Get data
        fetchData();
    }, [pathname]);

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
        <React.Fragment>
            {error === 404 ? <PageNotFound /> : null}
            <AppLayout>
                <ArticlePageFirstContainer>
                    <PageInnerContainer>
                        {poet ? (
                            <React.Fragment>
                                <PoetIntro
                                    poet={poet}
                                    scrollToView={scrollToView}
                                />
                                <PoetBio bioData={poet?.bio} />
                                <PoetWorks works={poet?.works[lang]} />
                                <PoetMovies movies={poet?.movies[lang]} />
                                <PoetCareer points={poet?.career} />
                                <PoetAwards awards={poet?.awards[lang]} />
                                <Sources data={poet?.references[lang]} />
                            </React.Fragment>
                        ) : null}
                    </PageInnerContainer>
                </ArticlePageFirstContainer>
            </AppLayout>
        </React.Fragment>
    );
};

export default PoetPage;
