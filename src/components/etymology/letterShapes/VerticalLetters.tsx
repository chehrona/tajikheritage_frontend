import React from 'react';

// Hooks
import { useMediaQuery } from 'react-responsive';
import { useGlobalData } from '../../../hooks/useGlobalData';

// Helper
import staticText from '../../../miscellaneous/language/etymologyPage.json';

// Types
import { LetterProps } from './types/componentTypes';

// Styled components
import { VerticalWrapper } from '../letterStack/letterStackStyles';

const VerticalLetters: React.FC<LetterProps> = ({ open, handleClick }) => {
    const { lang } = useGlobalData();
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    const lettersToRender = isMobile
        ? staticText.ETYM_PAGE_LETTERS_VERTICALS.m[lang]
        : staticText.ETYM_PAGE_LETTERS_VERTICALS.d[lang];

    return (
        <>
            {lettersToRender?.map((letter, index) => {
                const { char, delay } = letter;
                const top = letter.position.t;
                const left = letter.position.l;

                return (
                    <VerticalWrapper
                        $top={top}
                        $left={left}
                        $open={open}
                        $delay={delay}
                        key={`${[lang]}_${char}_${index}`}
                        $empty={char.startsWith('/filler')}
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
                    </VerticalWrapper>
                );
            })}
        </>
    );
};

export default VerticalLetters;
