export type BookDialogProps = {
    book: {
        title: string;
        email: string;
        msg?: string;
    };
    setBookDialog: React.Dispatch<React.SetStateAction<boolean>>;
    bookDialog: boolean;
    setBookIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

export type ValidEmailType = {
    title: string;
    email: string;
};
