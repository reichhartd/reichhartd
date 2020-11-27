import { useState, useEffect } from 'react';

export enum HealthStatus {
    UP = 'UP',
    DOWN = 'DOWN',
}

const Person = () => {
    const [healthStatus, setHealthStatus] = useState(HealthStatus.DOWN);

    useEffect(() => {
        (async () => {
            const response = await fetch('/.well-known/live');
            const data = await response.json();
            setHealthStatus(data.status);
        })();
    });

    return (
        <>
            <h1>Backend running:</h1>
            <h2>Status: {healthStatus}</h2>
        </>
    );
};

export default Person;
