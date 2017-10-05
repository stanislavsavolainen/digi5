import React from 'react';
import { render } from 'react-dom';

//material-ui
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
//my imports
import { ButtonStyle, field_name, TextStyle, advanced_field_name } from './theme_styles.jsx';

export default class RegisterUser extends React.Component {

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
          //  drawContent.push(<div>  <br /> {this.state.field_name[i]} <TextField style={{ backgroundColor: 'orange' }} /> </div>);
              drawContent.push(<div>  <br /> {field_name[i]} <TextField style={{ backgroundColor: 'orange' }} /> </div>);
        }

        drawContent.push(<div> ***** USER ADVANCED PROFILE DATA *********** </div>);


        for (var i = 0; i < advanced_field_name.length; i++) {
          //  drawContent.push(<div>  <br /> {this.state.field_name[i]} <TextField style={{ backgroundColor: 'orange' }} /> </div>);
              drawContent.push(<div>  <br /> {advanced_field_name[i]} <TextField style={{ backgroundColor: 'orange' }} /> </div>);
        }


        return (
            <div style={ { backgroundColor: 'burlywood' } } >
                <h1> Register new user </h1> {drawContent}
                <br /><Button style={ButtonStyle}> Register user </Button>
            </div>);
    }

}