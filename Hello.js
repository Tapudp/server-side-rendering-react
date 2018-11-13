import React from 'react';
// if(process.env.BROWSER){
//     require('Hello.css');
// }
import Transmit from 'react-transmit';
import s from './Hello.scss';
import fetch from 'isomorphic-fetch';


const Hello = React.createClass({
    render: function(){
        return <div className={s.root}> Hello  { this.props.name }. Async hello { this.props.hello } </div>
    }
});

export default Transmit.createContainer(Hello, {
    // this must be set, or else it would fail to render
    initialVariables: {},
    // each fragment will be resolved into a prop
    fragments: {
        hello(){
            return fetch('http://localhost:3000/static/data.json')
                .then(r => r.json())
                .then(r => r.hello);
        }
    }
});