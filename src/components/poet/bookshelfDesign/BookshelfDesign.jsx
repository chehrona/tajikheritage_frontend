import React, { useState } from "react";
import BookReader from "../bookReader/BookReader";
import BookDialog from "../bookDialog/BookDialog";

import {
    Book,
    BooksContainer,
    Cuboid,
    CuboidFace,
    MainContainer,
    Shelf,
    BookWrapper,
    StyledTooltip,
} from "./bookshelfDesignStyles";

export default function BookshelfDesign({ shelfNum, work, poet }) {
    const [openBook, setOpenBook] = useState(false);
    const [bookDialog, setBookDialog] = useState(false);
    const [bookIndex, setBookIndex] = useState(null);

    function handleBookAction(e) {
        const index = e.target.getAttribute("data");
        setBookIndex(index);

        if (poet[index]?.msg) {
            setBookDialog(true);
            setOpenBook(false);
        } else if (poet[index]?.source) {
            setOpenBook(true);
            setBookDialog(false);
        }
    }

    return (
        <section>
            <MainContainer>
                <Cuboid>
                    <CuboidFace />
                </Cuboid>
            </MainContainer>
            <BooksContainer>
                {work?.map((book, i) => {
                    return (
                        <StyledTooltip
                            title={book?.title}
                            placement="top"
                            arrow={true}
                            key={i}
                        >
                            <BookWrapper>
                                <Book
                                    grey={book?.msg}
                                    data={shelfNum + i}
                                    src={process.env.REACT_APP_BASE_URL + book?.cover}
                                    onClick={(e) => handleBookAction(e)}
                                />
                            </BookWrapper>
                        </StyledTooltip>
                    )
                })}
            </BooksContainer>
            <Shelf />
            <BookDialog book={poet[bookIndex]} setBookDialog={setBookDialog} bookDialog={bookDialog} setBookIndex={setBookIndex} />
            <BookReader book={poet[bookIndex]} setOpenBook={setOpenBook} openBook={openBook} setBookIndex={setBookIndex} />
        </section>
    )
}