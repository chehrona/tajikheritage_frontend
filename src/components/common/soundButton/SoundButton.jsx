import React from 'react';

// Material UI
import { VolumeUp } from '@mui/icons-material';

// Styled components
import { StyledIconButton } from './soundButtonStyles';

export default function SoundButton({ data }) {
    const toggleAudio = (e) => {
        const audioFile = e.currentTarget.children[0];
        audioFile.play();
    };

    return (
        <StyledIconButton onClick={(e) => toggleAudio(e)}>
            <audio src={process.env.REACT_APP_BASE_URL + data}></audio>
            <VolumeUp />
        </StyledIconButton>
    );
}
