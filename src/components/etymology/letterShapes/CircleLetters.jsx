import React from 'react';

// Hooks
import { useMediaQuery } from 'react-responsive';
import { useGlobalData } from '../../../hooks/useGlobalData';

// Helper
import letters from '../../../miscellaneous/staticTexts.json';

// Styled components
import { CircleWrapper } from '../letterStack/letterStackStyles';

export default function OvalLetters({ open, handleClick }) {
    const { lang } = useGlobalData();
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    const lettersToRender = isMobile
        ? letters.ETYM_PAGE_LETTERS_CIRCLES.m[lang]
        : letters.ETYM_PAGE_LETTERS_CIRCLES.d[lang];

    return (
        <>
            {lettersToRender.map((letter, index) => {
                const { char, delay } = letter;
                const top = letter?.position.t;
                const left = letter?.position.l;

                return (
                    <CircleWrapper
                        top={top}
                        left={left}
                        open={open}
                        delay={delay}
                        key={`${[lang]}_${char}_${index}`}
                        empty={char.startsWith('/storage')}
                        onClick={() => handleClick(char)}
                    >
                        {char.startsWith('/storage') ? (
                            <img
                                alt="filler"
                                src={process.env.REACT_APP_BASE_URL + char}
                            />
                        ) : (
                            <span>{char}</span>
                        )}
                    </CircleWrapper>
                );
            })}
        </>
    );
}
