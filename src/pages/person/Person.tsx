import React, { useState, useEffect } from 'react';

export enum HealthStatus {
    UP = 'UP',
    DOWN = 'DOWN',
}

const Person = () => {
    const [data, setData] = useState(HealthStatus.DOWN);

    useEffect(() => {
        (async () => {
            const response = await fetch('/.well-known/live');
            const data = await response.json();
            setData(data.status);
        })();
    });

    return (
        <>
            <h1>Backend running:</h1>
            <h2>Status: {data}</h2>
        </>
    );
};

export default Person;
