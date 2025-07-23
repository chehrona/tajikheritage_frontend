import React from 'react';

// Types
import { CustomIconProps } from './types';

const CustomIcon: React.FC<CustomIconProps> = ({ icon, size = 22 }) => {
    switch (icon) {
        case 'speaker':
            return (
                <img
                    src="/icons/actions/speaker.svg"
                    height={`${size}rem`}
                    width={`${size}rem`}
                    alt="icon"
                />
            );
        case 'ru':
            return (
                <img
                    src="/icons/flags/ru.svg"
                    height={`${size}rem`}
                    width={`${size}rem`}
                    alt="icon"
                />
            );
        case 'us':
            return (
                <img
                    src="/icons/flags/us.svg"
                    height={`${size}rem`}
                    width={`${size}rem`}
                    alt="icon"
                />
            );
        case 'twitter':
            return (
                <img
                    src="./icons/socials/twitter.svg"
                    height={`${size}rem`}
                    width={`${size}rem`}
                    alt="icon"
                />
            );
        case 'tiktok':
            return (
                <img
                    src="./icons/socials/tiktok.svg"
                    height={`${size}rem`}
                    width={`${size}rem`}
                    alt="icon"
                />
            );

        // Header icons
        case 'menu':
            return (
                <img
                    src="./icons/action/menu.svg"
                    height={`${size}rem`}
                    width={`${size}rem`}
                    alt="icon"
                />
            );
        case 'copyright':
            return (
                <img
                    src="./icons/copyright.svg"
                    height={`${size}rem`}
                    width={`${size}rem`}
                    alt="icon"
                />
            );

        // Flags
        case 'tj':
            return (
                <img
                    src="./icons/flags/tj.svg"
                    height={`${size}rem`}
                    width={`${size}rem`}
                    alt="icon"
                />
            );
        case 'ru':
            return (
                <img
                    src="./icons/flags/ru.svg"
                    height={`${size}rem`}
                    width={`${size}rem`}
                    alt="icon"
                />
            );
        case 'en':
            return (
                <img
                    src="./icons/flags/en.svg"
                    height={`${size}rem`}
                    width={`${size}rem`}
                    alt="icon"
                />
            );

        default:
            return null;
    }
};

export default CustomIcon;
