// Code Keypad Component Here
import React from 'react';

function Keypad (){
    function handleChange() {
        console.log("Entering password...");
    }
    return (
        <div>
            <input type="password" onChange={handleChange} placeholder='Password'/>
        </div>
    )
}

export default Keypad;