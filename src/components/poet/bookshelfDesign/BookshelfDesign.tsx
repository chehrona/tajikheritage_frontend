import React, { useState } from 'react';

// Components
import BookReader from '../bookReader/BookReader';
import BookDialog from '../bookDialog/BookDialog';

// Types
import { BookshelfDesignProps } from './types/componentTypes';

// Styled components
import {
    Book,
    BooksContainer,
    Cuboid,
    CuboidFace,
    SectionWrapper,
    Shelf,
    BookWrapper,
    StyledTooltip,
} from './bookshelfDesignStyles';

const BookshelfDesign: React.FC<BookshelfDesignProps> = ({
    shelfNum,
    work,
    poet,
}) => {
    const [bookIndex, setBookIndex] = useState<number>(-1);

    function handleBookAction(e: React.MouseEvent<HTMLDivElement>) {
        const indexStr = e.currentTarget.getAttribute('data-id');

        if (indexStr === null || isNaN(parseInt(indexStr))) {
            return;
        }

        const index = parseInt(indexStr);
        setBookIndex(index);
    }

    return (
        <div>
            <SectionWrapper>
                <Cuboid>
                    <CuboidFace />
                </Cuboid>
            </SectionWrapper>
            <BooksContainer>
                {work?.map((book, i) => {
                    return (
                        <StyledTooltip
                            title={book?.title}
                            placement="top"
                            arrow={true}
                            key={i}
                        >
                            <BookWrapper
                                data-id={shelfNum + i}
                                onClick={(e) => handleBookAction(e)}
                            >
                                <Book
                                    $grey={!book.source}
                                    src={
                                        process.env.REACT_APP_BASE_URL +
                                        book?.cover
                                    }
                                />
                            </BookWrapper>
                        </StyledTooltip>
                    );
                })}
            </BooksContainer>
            <Shelf />
            {bookIndex >= 0 && (
                <React.Fragment>
                    <BookDialog
                        book={poet[bookIndex]}
                        setBookIndex={setBookIndex}
                    />
                    <BookReader
                        book={poet[bookIndex]}
                        setBookIndex={setBookIndex}
                    />
                </React.Fragment>
            )}
        </div>
    );
};

export default BookshelfDesign;
