import React from "react";

const Welcome = ({name}) => {
    let sayHello = `Hello ${name}!`;
    let msg = `Welcome to Newton School`;
    return(
        <div>
            <h1>{sayHello}</h1>
            <h2>{msg}</h2>
        </div>
    );
};

export default Welcome;