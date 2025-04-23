import React from 'react';

// Material UI
import { VolumeUp } from '@mui/icons-material';

// Styled components
import { StyledIconButton } from './soundButtonStyles';

const SoundButton: React.FC<{ data: string }> = ({ data }) => {
    const toggleAudio = (e: React.MouseEvent<HTMLButtonElement>) => {
        const audioFile = e.currentTarget.children[0] as HTMLAudioElement;
        audioFile.play();
    };

    return (
        <React.Fragment>
            {data.length > 0 ? (
                <StyledIconButton onClick={(e) => toggleAudio(e)}>
                    <audio src={process.env.REACT_APP_BASE_URL + data}></audio>
                    <VolumeUp />
                </StyledIconButton>
            ) : null}
        </React.Fragment>
    );
};

export default SoundButton;
