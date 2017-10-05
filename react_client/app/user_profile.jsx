import React from 'react';
import { render } from 'react-dom';

//material-ui
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';

import { field_name, advanced_field_name, TextStyle2 } from './theme_styles.jsx';

export default class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // screen: 'A'
        }
    }

    render() {

        let drawContent = [];
        drawContent.splice(0, drawContent.length);

        for (var i = 0; i < field_name.length; i++) {
            //  drawContent.push( <div>  <br /> { this.state.field_name[i] } </div> );
            drawContent.push(<div>  <br /> {field_name[i]} </div>);
        }

        drawContent.push(<div> <br /><br /> **** More detailed info about current user ! ***** </div>);

        for (var i = 0; i < advanced_field_name.length; i++) {
            //  drawContent.push( <div>  <br /> { this.state.field_name[i] } </div> );
            drawContent.push(<div style={TextStyle2}>  <br /> {advanced_field_name[i]} </div>);
        }

        return (<div style={{ backgroundColor: 'burlywood' }} > <h1> User profile </h1> {drawContent}  < br /> </div>);
    }

}