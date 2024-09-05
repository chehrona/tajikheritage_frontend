import { MovieInfoType } from '../../poetMovies/types/componentTypes';

export type MovieDialogProps = {
    movieInfo?: MovieInfoType;
    showMovieInfo: boolean;
    setShowMovieInfo: React.Dispatch<React.SetStateAction<boolean>>;
};
