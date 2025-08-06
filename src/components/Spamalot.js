import Spam from "./Spam";
import React, { Component } from 'react';


const Spamalot = () => {
    return (
        <div id="ex-2">
            {Array.from({ length: 500 }, (_, i) => (
                <Spam key={i} />
            ))}
        </div>
    )
}

export default Spamalot

