import {useState} from 'react';

function useToggle(initialVal = false){
    // creating the piece of state and its corresponding
    // update function
    const [state, setState] =  useState(initialVal);
    const toggle = () => {
        setState(!state);
    }
    return [state, toggle];
}

export default useToggle;