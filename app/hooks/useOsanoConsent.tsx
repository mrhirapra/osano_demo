'use client';
import { useEffect, useState } from 'react';

export const useOsanoConsent = () => {
    const [consentStatus, setConsentStatus] = useState(null);

    useEffect(() => {
        const checkConsent = () => {
            // @ts-ignore
            if (window.Osano && window.Osano.cm) {
                // @ts-ignore
                console.log('-----------window.Osano--------', window.Osano.cm.storage.getConsent())
                // @ts-ignore
                const status = window.Osano.cm.storage.getConsent();
                // @ts-ignore
                setConsentStatus(status);
            }
        };

        // Wait for Osano API to load
        const interval = setInterval(() => {
            // @ts-ignore
            if (window.Osano && window.Osano.cm) {
                clearInterval(interval);
                checkConsent();
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return consentStatus;
};
