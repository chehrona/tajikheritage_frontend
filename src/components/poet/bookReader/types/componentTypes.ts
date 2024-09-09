export type BookDetails = {
    title: string;
    cover: string;
    msg?: string;
    email?: boolean;
    source?: string;
};

export type BookReaderProps = {
    book: BookDetails;
    setOpenBook: React.Dispatch<React.SetStateAction<boolean>>;
    openBook: boolean;
    setBookIndex: React.Dispatch<React.SetStateAction<number | null>>;
};
