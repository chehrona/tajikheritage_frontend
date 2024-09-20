import React from 'react';

// Types
import { ImageBallProps } from './types/componentTypes';

// Styled components
import { Border, HomeImage, MainContainer } from './imageBallStyles';

const ImageBall: React.FC<ImageBallProps> = ({ entry, opacities, index }) => {
    return (
        <MainContainer>
            {entry.outer?.map((ball) => {
                return (
                    <Border
                        key={ball.size}
                        $size={ball.size}
                        $opacity={opacities[index]}
                        $bottom={ball.bottom}
                        $right={ball.right}
                        $top={ball.top}
                    />
                );
            })}
            {entry.inner?.map((ball, i) => {
                return (
                    <HomeImage
                        key={ball.size}
                        src={ball.img}
                        $size={ball.size}
                        $opacity={opacities[index]}
                        $bottom={ball.bottom}
                        $right={ball.right}
                        $top={ball.top}
                    />
                );
            })}
        </MainContainer>
    );
};

export default ImageBall;
