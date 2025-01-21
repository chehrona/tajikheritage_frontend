import React from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Types
import { ProverbObj } from '../../../articlePages/proverbPage/types/componentTypes';

// Styled components
import {
    LogoWrapper,
    LogoContainer,
    LogoOuter,
    LogoInner,
    SvgContainer,
    Text,
} from './proverbSoundBoxStyles';

const ProverbSoundBox: React.FC<{ proverb: ProverbObj }> = ({ proverb }) => {
    const { lang } = useGlobalData();

    const toggleAudio = (e: React.MouseEvent<HTMLDivElement>) => {
        const audioFile = e.currentTarget.children[0] as HTMLAudioElement;
        audioFile.play();
    };

    return (
        <LogoContainer>
            <LogoWrapper onClick={(e) => toggleAudio(e)} $lang={lang}>
                <audio
                    src={process.env.REACT_APP_BASE_URL + proverb?.sound}
                ></audio>
                <LogoOuter
                    $lang={lang}
                    src={process.env.REACT_APP_BASE_URL + proverb?.logo.outer}
                />
                <LogoInner
                    src={process.env.REACT_APP_BASE_URL + proverb?.logo.inner}
                />
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
                            : '• ГӮШ КУНЕД •'}
                    </textPath>
                </Text>
            </SvgContainer>
        </LogoContainer>
    );
};

export default ProverbSoundBox;
