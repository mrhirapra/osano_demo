'use client';
import React from "react";
import { useOsanoConsent } from "./hooks/useOsanoConsent";

export default function Home() {
    const consentStatus: any = useOsanoConsent();

    if (!consentStatus) {
        console.log('-------consentStatus--------', consentStatus);
        return <div>Loading consent status...</div>;
    }

    return (
        <div>
            <h3 className="text-white">Consent Status:</h3>
            <pre className="text-white">{JSON.stringify(consentStatus, null, 2)}</pre>
            <p className="text-white">
                Terms accepted: {consentStatus?.termsAccepted ? 'Yes' : 'No'}
            </p>
            <p className="text-white">
                Privacy policy accepted: {consentStatus?.privacyPolicyAccepted ? 'Yes' : 'No'}
            </p>
        </div>
    );
}
