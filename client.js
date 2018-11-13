import React from 'react';
// import ReactDOM from 'react-dom';
import Transmit from 'react-transmit';

import Hello from './Hello';

// ReactDOM.render(
    // <Hello name="Worlds" />,
Transmit.render(
    Hello,
    { name: 'World' },
    document.getElementById('app')
);