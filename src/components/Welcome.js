import React from 'react';

const Welcome = ({name}) => {
    let sayHello = `Hello ${name}!`;
    let greetMessage = `Welcome to Newton School.`;
    return (
        <div>
            <h1>{sayHello}</h1>
            <h2>{greetMessage}</h2>
        </div>
    );
};

export default Welcome