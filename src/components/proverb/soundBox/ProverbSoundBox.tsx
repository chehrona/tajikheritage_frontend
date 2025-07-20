import React from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Types
import { ProverbObj } from '../../../articlePages/language/proverbPage/types/componentTypes';

// Styled components
import {
    LogoWrapper,
    LogoContainer,
    LogoOuter,
    LogoInner,
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
            <Text src={`./proverb/${lang}.svg`} />
        </LogoContainer>
    );
};

export default ProverbSoundBox;
