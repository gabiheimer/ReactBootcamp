import { useState, useEffect } from 'react';

export default function(key, defaultVal) {
    const [ value, setValue ] = useState(() => {
        return JSON.parse(window.localStorage.getItem(key)) || defaultVal;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [ value, setValue ];
}