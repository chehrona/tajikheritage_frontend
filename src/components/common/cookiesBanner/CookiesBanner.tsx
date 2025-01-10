import React, { useCallback, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Services
import { addVisit } from '../../../services/request';

// Helper
import staticTexts from '../../../miscellaneous/staticTexts.json';

// Components
import CustomButton from '../button/CustomButton';

// Styled components
import {
    MainContainer,
    ContentWrapper,
    IconImage,
    InfoText,
    ButtonWrapper,
} from './cookiesBannerStyles';

const CookiesBanner: React.FC = () => {
    const { lang } = useGlobalData();
    const { pathname } = useLocation();
    const [open, setOpen] = useState<boolean>(!!!localStorage.getItem('th_Id'));

    const handleAccept = useCallback(async () => {
        try {
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const { latitude, longitude } = position.coords;
                        let country = '';

                        if (latitude && longitude) {
                            const response = await fetch(
                                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
                            );
                            const data = await response.json();
                            if (data.status === 'OK') {
                                const countryResult = data.results.find(
                                    (result: any) =>
                                        result.types.includes('country'),
                                );
                                if (countryResult) {
                                    country = countryResult.formatted_address;
                                    await addVisit(pathname, country);
                                }
                            } else {
                                console.log(
                                    'Failed to fetch country information:',
                                    data.error_message,
                                );
                            }
                        }
                    },
                    (error) => {
                        console.error(
                            'Error fetching location:',
                            error.message,
                        );
                    },
                );
            }
        } catch (error) {
            console.error('Error recording visit:', error);
        } finally {
            setOpen(false);
        }
    }, [pathname]);

    const handleDecline = useCallback(async () => {
        try {
            await addVisit(pathname, 'declined');
        } catch (error) {
            console.error('Error recording visit:', error);
        } finally {
            setOpen(false);
        }
    }, [pathname]);

    return (
        <>
            {open ? (
                <MainContainer>
                    <ContentWrapper>
                        <IconImage src="/customAssets/cookies.png" />
                        <InfoText>
                            {staticTexts.ACCEPT_COOKIES.text[lang]}
                        </InfoText>
                        <Link to={'/cookies-policy'} target="_blank">
                            {staticTexts.ACCEPT_COOKIES.link[lang]}
                        </Link>
                        <ButtonWrapper>
                            <CustomButton
                                width={'30%'}
                                handleClick={handleAccept}
                                text={
                                    staticTexts.ACCEPT_COOKIES.button[lang][0]
                                }
                            />
                            <CustomButton
                                width={'30%'}
                                handleClick={handleDecline}
                                text={
                                    staticTexts.ACCEPT_COOKIES.button[lang][1]
                                }
                            />
                        </ButtonWrapper>
                    </ContentWrapper>
                </MainContainer>
            ) : null}
        </>
    );
};

export default CookiesBanner;
