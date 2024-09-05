import React, { useState } from 'react';
import { useGlobalData } from '../../../hooks/useGlobalData';
import MovieDialog from '../movieDialog/MovieDialog';

import {
    MainContainer,
    MovieCard,
    Image,
    StyledIconButton,
    StyledExpand,
    MovieWrapper,
} from './poetMovieStyles.js';

export default function PoetMovies({ poet }) {
    const { lang } = useGlobalData();
    const [showMovieInfo, setShowMovieInfo] = useState(false);
    const [movieInfo, setMovieInfo] = useState(null);

    function handleMovieDialog(e, movie) {
        setShowMovieInfo(true);
        setMovieInfo(movie);
    }

    return (
        <MainContainer id="Films">
            <MovieWrapper>
                {poet[lang].map((movie, i) => {
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
}
