import React from 'react';

// Hooks
import { useGlobalData } from '../../hooks/useGlobalData';
import { useMediaQuery } from 'react-responsive';

// Helper
import staticText from '../../miscellaneous/staticTexts.json';

// Components
import AppLayout from '../../AppLayout';
import TextSegment from '../../components/common/articleTextSegment/TextSegment';
import ArticlePageFirstContainer from '../../components/common/pageWrapper/ArticlePageFirstContainer';
import PageInnerContainer from '../../components/common/pageInnerContainer/PageInnerContainer';
import { ArticleData } from '../genericArticlePage/types/componentTypes';

const CookiesPage: React.FC = () => {
    const { lang } = useGlobalData();
    const data = staticText.COOKIES as Omit<ArticleData, 'references'>;
    const isTablet = useMediaQuery({
        query: `(min-device-width: 481px) and (max-device-width: 1024px)`,
    });
    const topLeftRad = isTablet ? 2.5 : 4;

    return (
        <AppLayout>
            <ArticlePageFirstContainer>
                <PageInnerContainer height={40}>
                    {data.desc[lang].map((entry, i) => {
                        return (
                            <TextSegment
                                i={i}
                                key={`${data?.name[lang]}_${i}`}
                                data={entry}
                                title={data.name[lang]}
                                topLeftRad={topLeftRad}
                            />
                        );
                    })}
                </PageInnerContainer>
            </ArticlePageFirstContainer>
        </AppLayout>
    );
};

export default CookiesPage;
