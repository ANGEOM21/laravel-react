// resources/js/components/HelloReact.js

import React from 'react';
import ReactDOM from 'react-dom';

export default function HelloReact() {
    return (
        <>
        <h1>Hello React!</h1>
        <p>haii my name angeom</p>
        </>
    );
}

if (document.getElementById('root')) {
    ReactDOM.render(<HelloReact />, document.getElementById('root'));
}
