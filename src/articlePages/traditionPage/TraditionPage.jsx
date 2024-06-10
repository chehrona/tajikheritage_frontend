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
    MythContainer,
} from "./traditionPageStyles";

export default function TraditionPage() {
    const { id } = useParams();
    const { lang } = useSetLang();
    const [tradition, setTradition] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await requestArticleInfo(id, "customs/traditions");
            setTradition(data);
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
            {tradition ? (
                <Fade inProp={!loading}>
                    <PageContainer>
                        <MythContainer>
                            {/* <BoxOne tradition={tradition.desc[lang][0]} title={tradition.name[lang]} topLeftRad={4} />
                            <BoxTwo tradition={tradition.desc[lang][1]} />
                            <BoxOne tradition={tradition.desc[lang][2]} />
                            <BoxTwo tradition={tradition.desc[lang][3]} />
                            <BoxOne tradition={tradition.desc[lang][4]} />
                            <BoxTwo tradition={tradition.desc[lang][5]} noBorder={1} />
                            <Sources
                                data={tradition.references[lang]}
                                color={'#dedbdb'}
                                title={'#fcf6e9'}
                                background={'#0F0A00'}
                            />  */}
                        </MythContainer>
                    </PageContainer>
                </Fade>
            ) : (error && <Alert />)}
        </>
    );
}