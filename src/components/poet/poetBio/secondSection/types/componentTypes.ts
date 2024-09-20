export type PoetBioSectionTwoDetails = {
    year: string;
    img: string;
    desc: {
        [key: string]: string;
    };
};

export type PoetBioSectionTwo = {
    [key: string]: PoetBioSectionTwoDetails[];
};
