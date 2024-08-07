import React, { useState, useEffect } from 'react';

// Hooks
import { useLocation, useParams } from 'react-router-dom';
import { useGlobalData } from '../../App';
import { useMediaQuery } from 'react-responsive';

// Services
import { requestPage, requestArticleInfo } from '../../services/request';

// Components
import TextSegment from '../../components/common/articelTextSegment/TextSegment';
import Sources from '../../components/common/sources/Sources';
import Fade from '../../components/common/transition/Fade';
import Loader from '../../components/common/loader/Loader';
import Alert from '../../components/common/alert/Alert';

// Styled components
import { PageContainer, TextContainer } from './mythPageStyles';

export default function MythPage({ page }) {
    const { id } = useParams();
    const location = useLocation();
    const { lang, title, setTitle } = useGlobalData();
    const [myth, setMyth] = useState();
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
    const isTablet = useMediaQuery({
        query: `(min-device-width: 481px) and (max-device-width: 1024px)`,
    });

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await requestArticleInfo(id, page);
            setMyth(data);

            // Setting the title
            const headerData = await requestPage(
                page.substring(0, page.indexOf('/')),
            );

            let tempHeader = { ...title };

            headerData.forEach((entry) => {
                entry.sections.forEach((section) => {
                    if (
                        section.link ===
                        page.substring(page.indexOf('/') + 1, page.length - 1)
                    ) {
                        for (const key in title) {
                            let titleArr = [...title[key]];

                            // New title
                            const newItem = [
                                `${section.title[key].toUpperCase()}`,
                                `${data.name[key]}`,
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
    }, [location.pathname]);

    return (
        <>
            <Loader inProp={loading} />
            {!loading && myth ? (
                <Fade inProp={!loading}>
                    <PageContainer>
                        <TextContainer>
                            {myth.desc[lang].map((entry, i) => {
                                return (
                                    <TextSegment
                                        key={`${myth?.name[lang]}_${i}`}
                                        reverse={i % 2 > 0}
                                        data={entry}
                                        title={i === 0 && myth.name[lang]}
                                        topLeftRad={
                                            isMobile
                                                ? 0
                                                : i === 0
                                                ? isTablet
                                                    ? 2.5
                                                    : 4
                                                : 0
                                        }
                                        noBorder={
                                            i === myth.desc[lang].length - 1 &&
                                            1
                                        }
                                    />
                                );
                            })}
                            <Sources
                                data={myth.references[lang]}
                                color={'#dedbdb'}
                                title={'#fcf6e9'}
                                background={'#0F0A00'}
                            />
                        </TextContainer>
                    </PageContainer>
                </Fade>
            ) : (
                !loading && error.length > 0 && <Alert message={error} />
            )}
        </>
    );
}
