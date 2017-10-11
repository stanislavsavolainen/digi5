

import React from 'react';
import { render } from 'react-dom';

//material-ui
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/RaisedButton';
import Toolbar from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RegisterUser from './register_user.jsx';
import ViewAllUsers from './view_all_user.jsx';
import UserProfile from './user_profile.jsx';
import { ButtonStyle, user_data_structure, TextStyle } from './theme_styles.jsx';
//import field_name from './theme_styles.jsx';


const muiTheme = getMuiTheme({
    //  card: {
    //    titleColor: "red",
    //  },
});

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            screen: 'R'
        }
    }

    buttonEventListener(action) {

        this.state.screen = action;
        this.setState(this.state);

        /*
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
        */
    }

    render() {
        // return <p> Hello React!</p>;
        let drawScreen;

        if (this.state.screen === 'A') { drawScreen = (<ViewAllUsers />); }
        else if (this.state.screen === 'R') {drawScreen = (<RegisterUser /> );}
        else if (this.state.screen === 'P') { drawScreen = (<UserProfile />); }

        //border-style: solid;
        // border-width: 15px;

        //        
        //        var button_style = {
        //            backgroundColor: 'darkred',
        //            color: 'gold',
        //
        //             borderWidth: '3px',
        //             borderColor: 'gold',
        //             borderStyle : 'solid'
        //
        //        }


        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <div>
                        <AppBar title="User maintenance system" showMenuIconButton={false} />
                        <Button style={{ margin: 12 }} primary={true} onClick={() => this.buttonEventListener("R")} label="Register user" />
                        <Button style={{ margin: 12 }} primary={true} onClick={() => this.buttonEventListener("A")} label="View All users ( only view data )" />
                        <Button style={{ margin: 12 }} primary={true} onClick={() => this.buttonEventListener("P")} label="View user profile ( detailed data of selecte user)" />
                        {drawScreen}
                    </div>

                </div>
            </MuiThemeProvider>
        );
    }
}

render(<App />, document.getElementById('app'));
console.log('Hello World !');
