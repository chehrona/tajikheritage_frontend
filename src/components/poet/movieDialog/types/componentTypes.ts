import { PoetMovieType } from '../../poetMovies/types/componentTypes';

export type MovieDialogProps = {
    movieInfo?: PoetMovieType;
    showMovieInfo: boolean;
    setShowMovieInfo: React.Dispatch<React.SetStateAction<boolean>>;
};
