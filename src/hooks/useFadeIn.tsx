import { useEffect, RefObject } from 'react';

// Hooks
import { useGlobalData } from './useGlobalData';

export const useFadeIn = (
    trigger: boolean,
    setTriggerFade: React.Dispatch<React.SetStateAction<boolean>>,
    elementRef: RefObject<HTMLElement>,
    duration: string = '1s',
) => {
    const { lang } = useGlobalData();

    useEffect(() => {
        const currentElement = elementRef.current;

        if (trigger && currentElement) {
            currentElement.classList.add('fade-in');

            const timer = setTimeout(() => {
                setTriggerFade(false);
            }, parseFloat(duration) * 1000);

            return () => {
                clearTimeout(timer);
                if (currentElement) {
                    currentElement.classList.remove('fade-in');
                }
            };
        }
    }, [trigger, duration, elementRef, setTriggerFade]);

    useEffect(() => {
        setTriggerFade(true);
    }, [lang]);
};
