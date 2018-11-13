import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Transmit from 'react-transmit';
import Hello from './Hello';

function handleRender(req, res){
    // const html = ReactDOM.renderToString(
    //     <Hello name="Worlds" />
    // );
    // fs.readFile('./index.html', 'utf8', function(err, file){
    //     if(err){
    //         return console.log(err);
    //     }
    //     const document = file.replace(/<div id="app"><\/div>/, `<div id="app"></div>`);
    //     res.send(document);
    // });
    Transmit.renderToString(Hello, { name: 'World' })
        .then(({reactString, reactData}) => {
            fs.readFile('./index.html', 'utf8', function(err, file){
                if(err){
                    return console.log(err);
                }
                const document = file.replace(/<div id="app"><\/div>/, `<div id="app">${reactString}</div>`);
                const output = Transmit.injectIntoMarkup(document, reactData, ['/built/client.js']);
                res.send(output);
            })
        })
        .catch(e => console.log(e));
}