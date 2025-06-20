export type VideoType = {
    link: string;
    info: {
        title: string;
        text: string;
    };
};

export type VideoProps = {
    content: VideoType;
};
