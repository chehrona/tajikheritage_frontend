import React, { useState, useEffect } from 'react';

// Hooks
import { useParams, useLocation } from 'react-router-dom';
import { useGlobalData } from '../../App';

// Service
import { requestPage, requestArticleInfo } from '../../services/request';

// Components
import BoxOne from '../../components/myths/mythIntro/TextSegment';
import BoxTwo from '../../components/myths/mythIntro/SecondBox';
import Sources from '../../components/common/sources/Sources';
import Fade from '../../components/common/transition/Fade';
import Loader from '../../components/common/loader/Loader';
import Alert from '../../components/common/alert/Alert';

// Styled components
import {
    PageContainer,
    ProverbContainer,
    LogoWrapper,
    Logo,
    QuoteWrapper,
} from './proverbPageStyles';

export default function ProverbPage() {
    const { id } = useParams();
    const location = useLocation();
    const { lang, title, setTitle } = useGlobalData();
    const [proverb, setProverb] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await requestArticleInfo(id, 'language/proverb/');
            setProverb(data);

            // Setting the title
            const headerData = await requestPage('language');

            let tempHeader = { ...title };

            headerData.forEach((entry) => {
                entry.sections.forEach((section) => {
                    if (section.link === 'proverbs') {
                        for (const key in title) {
                            let titleArr = [...title[key]];

                            // New title
                            const newItem = [
                                `${section.title[key].toUpperCase()}`,
                                `${data.name[key][1]}`,
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
            {proverb ? (
                <Fade inProp={!loading}>
                    <PageContainer>
                        <ProverbContainer>
                            <LogoWrapper>
                                <Logo
                                    src={
                                        process.env.REACT_APP_BASE_URL +
                                        proverb?.logo
                                    }
                                />
                            </LogoWrapper>
                            <QuoteWrapper>{proverb.quote[lang]}</QuoteWrapper>
                            <Sources
                                data={proverb.references[lang]}
                                color={'#dedbdb'}
                                title={'#fcf6e9'}
                                background={'#0F0A00'}
                            />
                        </ProverbContainer>
                    </PageContainer>
                </Fade>
            ) : (
                error && <Alert />
            )}
        </>
    );
}
