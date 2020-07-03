import React from 'react';
import useFormState from './Hooks/useFormState';

function SimpleFormHooks() {
    const [ email, handleEmailChange, resetEmail ] = useFormState('');
    const [ name, handleNameChange, resetName ] = useFormState('');

    const handleSubmit = () => {
        // do whatever
        resetEmail();
        resetName();
    }

    return(
        <div>
            <h1>Email is: {email} & Name is: {name}</h1>
            <input
                type = 'text'
                value = {email}
                onChange = {handleEmailChange}
            />
            <input
                type = 'text'
                value = {name}
                onChange = {handleNameChange}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default SimpleFormHooks;