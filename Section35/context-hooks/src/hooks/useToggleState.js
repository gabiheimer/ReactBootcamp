import { useState } from 'react';

export default function useToggleState(initVal){
    const [ value, setValue ] = useState(initVal);
    const toggle = () => setValue(!value);
    return [ value, toggle ];
} 