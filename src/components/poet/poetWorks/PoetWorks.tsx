import React from 'react';

// Hooks
import { useMediaQuery } from 'react-responsive';

// Components
import BookshelfDesign from '../bookshelfDesign/BookshelfDesign';

// Types
import { PoetWorksTypes } from './types/componentTypes';

// Styled components
import { MainContainer } from './poetWorksStyles';

const PoetWorks: React.FC<{ works: PoetWorksTypes[] }> = ({ works }) => {
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
    const numBooks = works.length;
    let shelfNum: number = 0;

    if (isMobile) {
        shelfNum = Math.ceil(numBooks / 2);
    } else {
        shelfNum = Math.ceil(numBooks / 4);
    }

    function renderShelves(n: number) {
        let shelves = [];

        if (isMobile) {
            for (let i = 0; i < n; i++) {
                shelves.push(
                    <BookshelfDesign
                        key={i}
                        shelfNum={i * 2}
                        poet={works}
                        work={works.slice(i * 2, (i + 1) * 2)}
                    />,
                );
            }
        } else {
            for (let i = 0; i < n; i++) {
                shelves.push(
                    <BookshelfDesign
                        key={i}
                        shelfNum={i * 4}
                        poet={works}
                        work={works.slice(i * 4, (i + 1) * 4)}
                    />,
                );
            }
        }

        return shelves;
    }

    return <MainContainer id="Works">{renderShelves(shelfNum)}</MainContainer>;
};

export default PoetWorks;
