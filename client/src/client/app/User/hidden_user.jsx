import React from 'react';
import { render } from 'react-dom';

export default class HiddenUser extends React.Component {

    render(){
       return( <div> Hidden user  -> SELECT * FROM users WHERE users_visible = "0"  </div> );
    }

}