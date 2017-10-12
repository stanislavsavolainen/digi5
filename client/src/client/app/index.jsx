

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
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import RegisterUser from './register_user.jsx';
import ViewAllUsers from './view_all_user.jsx';
import UserProfile from './user_profile.jsx';
import { ButtonStyle, user_data_structure, TextStyle } from './theme_styles.jsx';
import LinkButton from './LinkButton.jsx';
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
    drawScreen() {
        return (
            <div>
                <Route path="/view-all" component={ViewAllUsers} />
                <Route path="/view-user/:userId" component={UserProfile} />
                <Route path="/register-user" component={RegisterUser} />
                <Route exact={true} path="/" render={() => "Welcome"} />
            </div>
        )
    }

    render() {
        // return <p> Hello React!</p>;
        //if (this.state.screen === 'A') { drawScreen = (<ViewAllUsers on_select={(id) => this.openUserProfile(id)} />); }
        //else if (this.state.screen === 'R') {drawScreen = (<RegisterUser /> );}
        //else if (this.state.screen === 'P') { drawScreen = (<UserProfile user_id={this.state.user_id}/>); }

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
            <Router>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div>
                        <div>
                            <AppBar title="User maintenance!! system" showMenuIconButton={false} />
                            <LinkButton url="/view-all" label="Users" />
                            <LinkButton url="/view-user" label="View user" />
                            <LinkButton url="/register-user" label="Register user" />
                            {this.drawScreen()}
                        </div>
                    </div>
                </MuiThemeProvider>
            </Router>
        );
    }
}

render(<App />, document.getElementById('app'));
console.log('Hello World !');
