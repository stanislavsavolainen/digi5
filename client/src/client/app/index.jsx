

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

import RegisterUser from './User/register_user.jsx';
import ViewAllUsers from './User/view_all_user.jsx';
import UserProfile from './User/user_profile.jsx';
import ViewDevices from './Device/view_devices.jsx';
import ViewLicense from './License/view_license.jsx';
import AddDevice from './Device/add_device.jsx';
import AddLicense from './License/add_license.jsx';
import ViewLogs from './Logs/view_logs.jsx'
//import { ButtonStyle, user_data_structure, TextStyle } from './theme_styles.jsx';
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

    }

    drawScreen() {
        return (
            <div>
                <Route path="/view-all" component={ViewAllUsers} />
                <Route path="/view-user/:userId" component={UserProfile} />
                <Route path="/register-user" component={RegisterUser} />
                <Route path="/view-devices" component={ViewDevices} />
                <Route path="/add-device" component={AddDevice} />
                <Route path="/view-license" component={ViewLicense} />
                <Route path="/add-license" component={AddLicense} />
                <Route path="/view-logs" component={ViewLogs} />
                <Route exact={true} path="/" render={() => "Welcome"} />
            </div>
        )
    }

    render() {
       
        return (
            <Router>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div>
                        <div>
                            <AppBar title="User maintenance!! system" showMenuIconButton={false} />
                            <LinkButton url="/view-all" label="Users" />
                            <LinkButton url="/view-user" label="View user" />
                            <LinkButton url="/register-user" label="Register user" />
                            <LinkButton url="/view-devices" label="View devices" />
                            <LinkButton url="/add-device" label="Add devices" />
                            <LinkButton url="/view-license" label="View license" />
                            <LinkButton url="/add-license" label="Add license" />
                            <LinkButton url="/view-logs" label="Logs" />
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
