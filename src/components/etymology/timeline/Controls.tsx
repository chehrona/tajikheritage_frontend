import { Add, Remove } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

export const ControlsContainer = styled.div`
    background-color: red;
    height: 5rem;
    width: 2rem;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    z-index: 10;
`;

const Controls: React.FC<{
    setScale: React.Dispatch<React.SetStateAction<number>>;
}> = ({ setScale }) => {
    const handleZoomIn = () => {
        setScale((prevScale) => {
            let newScale = prevScale + 50 * 0.001;
            return Math.min(Math.max(1.5, newScale), 2);
        });
    };

    const handleZoomOut = () => {
        setScale((prevScale) => {
            let newScale = prevScale + 50 * -0.001;
            return Math.min(Math.max(0.5, newScale), 2);
        });
    };

    return (
        <ControlsContainer>
            <IconButton>
                <Add onClick={handleZoomIn} />
            </IconButton>
            <IconButton>
                <Remove onClick={handleZoomOut} />
            </IconButton>
        </ControlsContainer>
    );
};

export default Controls;
