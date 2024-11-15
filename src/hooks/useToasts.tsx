import React, { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';

// Hooks
import { useGlobalData } from './useGlobalData';

// Static messgaes
import alertMessages from '../miscellaneous/alertMessages.json';

// Types
import { ToastTypes } from './hookTypes';
import { useLocation } from 'react-router-dom';
type AlertMessageKey = keyof typeof alertMessages;

export const useToasts = () => {
    const { lang } = useGlobalData();
    const { pathname } = useLocation();
    const toastsRef = useRef<{
        [id: string]: { key: AlertMessageKey };
    }>({});

    const showToast = (key: AlertMessageKey, type: ToastTypes, id: string) => {
        const message = alertMessages[key][lang];

        toastsRef.current[id] = { key };

        switch (type) {
            case 'info':
                return toast.info(message, {
                    toastId: id,
                });
            case 'success':
                return toast.success(message, {
                    toastId: id,
                });
            case 'error':
                return toast.error(message, {
                    toastId: id,
                });
        }
    };

    useEffect(() => {
        Object.keys(toastsRef.current).forEach((toastId) => {
            const { key } = toastsRef.current[toastId];
            const message = alertMessages[key][lang];

            toast.update(toastId, {
                render: message,
                autoClose: 2000,
            });
        });
    }, [lang]);

    useEffect(() => {
        toast.dismiss();
    }, [pathname]);

    return { showToast };
};
