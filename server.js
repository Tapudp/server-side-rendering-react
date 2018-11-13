import express from 'express';
import fs from 'fs';
import path from 'path';
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

const app = express(); 
// Serve built files with express static files middleware
app.use('/built', express.static(path.join(__dirname, 'built')));
// Serve normal requests with out handleRender function
app.get('*', handleRender);
app.listen(3000);
console.log('=== Go to http://localhost:3000 ===')