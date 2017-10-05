

import React from 'react';
import { render } from 'react-dom';

//material-ui
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';

import RegisterUser from './register_user.jsx';
import ViewAllUsers from './view_all_user.jsx';
import UserProfile from './user_profile.jsx';
import { ButtonStyle, field_name, TextStyle } from './theme_styles.jsx';
//import field_name from './theme_styles.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            screen: 'A'
        }
    }

    buttonEventListener(action) {

        this.state.screen = action;
        this.setState(this.state);

        switch (action) {
            case "R":
                console.log("Register");

                break;

            case "A":
                console.log("All");
                break;

            case "P":
                console.log("Profiles");
                break;
        }

    }

    render() {
        // return <p> Hello React!</p>;
        let drawScreen;

        if (this.state.screen === 'A') { drawScreen = (<ViewAllUsers />); }
        else if (this.state.screen === 'R') { drawScreen = (<RegisterUser />); }
        else if (this.state.screen === 'P') { drawScreen = (<UserProfile />); }

        //border-style: solid;
        // border-width: 15px;

        var button_style = {
            backgroundColor: 'darkred',
            color: 'gold',

            // borderWidth: '3px',
            //  borderColor: 'gold',
            //  borderStyle : 'solid'

        }


        return (
            <div style={{ backgroundColor: 'chocolate' }}>
                <div style={TextStyle}>
                    <h1> User maitenance system </h1><br /><br />
                    <br /><br />
                    <Button style={ButtonStyle} onClick={() => this.buttonEventListener("R")}> Register user </Button>
                    <Button style={ButtonStyle} onClick={() => this.buttonEventListener("A")}> View All users ( only view data ) </Button>
                    <Button style={ButtonStyle} onClick={() => this.buttonEventListener("P")}> View user profile ( detailed data of selecte user) </Button>
                    <Button></Button>
                    <br /><br />
                    {drawScreen}
                </div>

            </div>);
    }
}

render(<App />, document.getElementById('app'));
console.log('Hello World !');
