import React from 'react';

function Greeting({ name, children }) {
    return (
        <h1>
            Hello {name || 'World'}!
            {children && <div>{children}</div>}
        </h1>
    );
}

export default Greeting;
