import React, { createContext, ReactNode, useContext } from 'react';

export const ToastContext = createContext({
    showToast: (message: string, type: 'success' | 'error' | 'info') => {},
});

export function useToasts() {
    return useContext(ToastContext);
}

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const showToast = (message: string, type: 'success' | 'error' | 'info') => {
        // toast[type](message, {
        //     autoClose: 5000,
        // });
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
        </ToastContext.Provider>
    );
};
