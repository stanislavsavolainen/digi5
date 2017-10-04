import React from 'react';
import { render } from 'react-dom';

//material-ui
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';

export default class RegisterUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // screen: 'A'
            field_name: ["First name", "Last name", "Phone", "E-mail"]
        }
    }

    render() {

        let drawContent = [];
        drawContent.splice(0, drawContent.length);

            for (var i = 0; i < this.state.field_name.length; i++) {
                drawContent.push(<div>  <br /> {this.state.field_name[i]} <TextField style={{ backgroundColor: 'orange' }} /> </div>);
            }

        return (<div style={{ backgroundColor: 'burlywood' }} > <h1> Register new user </h1> {drawContent} </div>);
    }

}