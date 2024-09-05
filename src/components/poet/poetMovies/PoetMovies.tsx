import React, { useCallback, useState } from 'react';

// Components
import MovieDialog from '../movieDialog/MovieDialog';

// Types
import { MovieInfoType } from './types/componentTypes';

// Styled components
import {
    MainContainer,
    MovieCard,
    Image,
    StyledIconButton,
    StyledExpand,
    MovieWrapper,
} from './poetMovieStyles';

const PoetMovies: React.FC<{ movies: MovieInfoType[] }> = ({ movies }) => {
    const [showMovieInfo, setShowMovieInfo] = useState<boolean>(false);
    const [movieInfo, setMovieInfo] = useState<MovieInfoType>();

    const handleMovieDialog = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>, movie: MovieInfoType) => {
            setShowMovieInfo(true);
            setMovieInfo(movie);
        },
        [],
    );

    return (
        <MainContainer id="Films">
            <MovieWrapper>
                {movies.map((movie: MovieInfoType, i: number) => {
                    return (
                        <MovieCard key={i} $delay={`${0.1 * i}s`}>
                            <Image
                                src={process.env.REACT_APP_BASE_URL + movie.img}
                            />
                            <StyledIconButton
                                onClick={(e) => handleMovieDialog(e, movie)}
                            >
                                <StyledExpand />
                            </StyledIconButton>
                        </MovieCard>
                    );
                })}
            </MovieWrapper>
            <MovieDialog
                movieInfo={movieInfo}
                showMovieInfo={showMovieInfo}
                setShowMovieInfo={setShowMovieInfo}
            />
        </MainContainer>
    );
};

export default PoetMovies;
