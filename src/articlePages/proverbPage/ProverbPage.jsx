import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSetLang } from "../../App";

import { requestArticleInfo } from "../../services/request";

import BoxOne from "../../components/myths/mythIntro/FirstBox";
import BoxTwo from "../../components/myths/mythIntro/SecondBox";
import Sources from "../../components/common/sources/Sources";
import Fade from "../../components/common/transition/Fade";
import Loader from "../../components/common/loader/Loader";
import Alert from "../../components/common/alert/Alert";

import { 
    PageContainer,
    ProverbContainer,
} from "./proverbPageStyles";

export default function ProverbPage() {
    const { id } = useParams();
    const { lang } = useSetLang();
    const [proverb, setProverb] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await requestArticleInfo(id, "");
            setProverb(data);
        } catch (error) {
            setError(true);
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
            {proverb ? (
                <Fade inProp={!loading}>
                    <PageContainer>
                        <ProverbContainer>
                            <BoxOne proverb={proverb.desc[lang][0]} title={proverb.name[lang]} topLeftRad={4} />
                            <BoxTwo proverb={proverb.desc[lang][1]} />
                            <BoxOne proverb={proverb.desc[lang][2]} />
                            <BoxTwo proverb={proverb.desc[lang][3]} />
                            <BoxOne proverb={proverb.desc[lang][4]} />
                            <BoxTwo proverb={proverb.desc[lang][5]} noBorder={1} />
                            <Sources
                                data={proverb.references[lang]}
                                color={'#dedbdb'}
                                title={'#fcf6e9'}
                                background={'#0F0A00'}
                            /> 
                        </ProverbContainer>
                    </PageContainer>
                </Fade>
            ) : (error && <Alert />)}
        </>
    );
}