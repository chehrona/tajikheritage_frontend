import React from 'react';

// Hooks
import { useGlobalData } from '../../../App';

// Styled components
import {
    LogoWrapper,
    LogoContainer,
    LogoOuter,
    LogoInner,
    SvgContainer,
    Text,
} from '../proverbPageStyles';

export default function LogoBox({ proverb }) {
    const { lang } = useGlobalData();

    const toggleAudio = (e) => {
        if (lang !== 'tj') {
            const audioFile = e.currentTarget.children[0];
            audioFile.play();
        }
    };

    return (
        <LogoContainer>
            <LogoWrapper onClick={(e) => toggleAudio(e)} lang={lang}>
                <audio
                    src={process.env.REACT_APP_BASE_URL + proverb?.sound}
                ></audio>
                <LogoOuter
                    lang={lang}
                    src={process.env.REACT_APP_BASE_URL + proverb?.logo.outer}
                />
                <LogoInner
                    src={process.env.REACT_APP_BASE_URL + proverb?.logo.inner}
                />{' '}
            </LogoWrapper>
            <SvgContainer viewBox="0 0 200 200">
                <path
                    id="text-path"
                    stroke="none"
                    fill="none"
                    d="M 100, 200 C 155.23, 200 200, 155.23 200, 100 C 200, 44.77 155.23, 0 100, 0 C 44.77, 0 0, 44.77 0, 100 C 0, 155.23 44.77, 200 100, 200 Z"
                />
                <Text>
                    <textPath
                        href="#text-path"
                        startOffset="50%"
                        textAnchor="middle"
                    >
                        {lang === 'us'
                            ? '• CLICK TO HEAR •'
                            : lang === 'ru'
                            ? '• ПОСЛУШАТЬ •'
                            : ''}
                    </textPath>
                </Text>
            </SvgContainer>
        </LogoContainer>
    );
}
