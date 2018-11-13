import React from 'react';
// if(process.env.BROWSER){
//     require('Hello.css');
// }
import s from './Hello.scss';


const Hello = React.createClass({
    render: function(){
        return <div className={s.root}> Hello { this.props.name } </div>
    }
});

export default Hello;