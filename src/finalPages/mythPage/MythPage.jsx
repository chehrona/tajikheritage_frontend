import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSetLang } from "../../App";

import { requestMyth } from "../../services/request";

import BoxOne from "../../components/myths/mythIntro/FirstBox";
import BoxTwo from "../../components/myths/mythIntro/SecondBox";
import Sources from "../../components/common/sources/Sources";
import Fade from "../../components/common/transition/Fade";
import Loader from "../../components/common/loader/Loader";
import Alert from "../../components/common/alert/Alert";

import { 
    PageContainer,
    MythContainer,
} from "./mythPageStyles";

export default function MythPage() {
    const { id } = useParams();
    const { lang } = useSetLang();
    const [myth, setMyth] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await requestMyth(id);
            setMyth(data);
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
            {myth ? (
                <Fade inProp={!loading}>
                    <PageContainer>
                        <MythContainer>
                            <BoxOne myth={myth.desc[lang][0]} title={myth.name[lang]} topLeftRad={4} />
                            <BoxTwo myth={myth.desc[lang][1]} />
                            <BoxOne myth={myth.desc[lang][2]} />
                            <BoxTwo myth={myth.desc[lang][3]} />
                            <BoxOne myth={myth.desc[lang][4]} />
                            <BoxTwo myth={myth.desc[lang][5]} noBorder={1} />
                            <Sources
                                data={myth.references[lang]}
                                color={'#dedbdb'}
                                title={'#fcf6e9'}
                                background={'#0F0A00'}
                            /> 
                        </MythContainer>
                    </PageContainer>
                </Fade>
            ) : (error && <Alert />)}
        </>
    );
}