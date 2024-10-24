import React from 'react';

// Hooks
import { useMediaQuery } from 'react-responsive';
import { useGlobalData } from '../../../hooks/useGlobalData';

// Helper
import staticText from '../../../miscellaneous/staticTexts.json';

// Types
import { LetterProps } from './types/componentTypes';

// Styled components
import { CircleWrapper } from '../letterStack/letterStackStyles';

const OvalLetters: React.FC<LetterProps> = ({ open, handleClick }) => {
    const { lang } = useGlobalData();
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    const lettersToRender = isMobile
        ? staticText.ETYM_PAGE_LETTERS_CIRCLES.m[lang]
        : staticText.ETYM_PAGE_LETTERS_CIRCLES.d[lang];

    return (
        <>
            {lettersToRender.map((letter, index) => {
                const { char, delay } = letter;
                const top = letter?.position.t;
                const left = letter?.position.l;

                return (
                    <CircleWrapper
                        $top={top}
                        $left={left}
                        $open={open}
                        $delay={delay}
                        $empty={char.startsWith('/filler')}
                        key={`${[lang]}_${char}_${index}`}
                        onClick={() => handleClick(char)}
                    >
                        {char.startsWith('/filler') ? (
                            <img
                                alt="flower"
                                src={process.env.PUBLIC_URL + char.substring(7)}
                            />
                        ) : (
                            <span>{char}</span>
                        )}
                    </CircleWrapper>
                );
            })}
        </>
    );
};

export default OvalLetters;
