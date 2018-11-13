import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Hello from './Hello';

function handleRender(req, res){
    const html = ReactDOM.renderToString(
        <Hello name="Worlds" />
    );
    fs.readFile('./index.html', 'utf8', function(err, file){
        if(err){
            return console.log(err);
        }
        const document = file.replace(/<div id="app"><\/div>/, `<div id="app"></div>`);
        res.send(document);
    });
}