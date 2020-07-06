import { useReducer, useEffect } from 'react';

export default function(key, defaultVal, reducer) {
    const [ value, dispatch ] = useReducer(reducer, defaultVal, () => {
        return JSON.parse(window.localStorage.getItem(key)) || defaultVal;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [ value, dispatch ];
}