import React from 'react';
import { render } from 'react-dom';

//material-ui
//import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/FlatButton';
//import Toolbar from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';

import { ButtonStyle, user_data_structure, field_name } from './theme_styles.jsx';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { Card, CardActions, CardHeader, CardTitle } from 'material-ui/Card';

import LinkButton from './../LinkButton.jsx'

export default class ViewAllUsers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // screen: 'A'
            result: "",
            p_fname: [],
            p_lname: [],
            p_states: [],
            on_select: props.on_select,
            users: []
        }
    }

    componentWillMount() {
        this.getAllUsers();
    }



    getAllUsers() {

        //post body
        let postData = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify("OK"),
        };

        //fetch
        let host = "http://127.0.0.1:5659";
        //let link = "/read_from_database3";
        let link = "/view_all_users";

        fetch(host + link, postData)
            .then((resp) => {
                return resp.json();
            })
            .then((users) => {
                this.state.users = users;
                this.setState(this.state);
            })
            .catch(function (error_msg) {
                // error if connection problem happens 
                console.log("Fetch error : " + error_msg);
                // document.getElementById("answer_field").innerHTML = "<div align='center'><font color='red'><h1>Node Server is down ! </h1></font></div>";
            })
    }

    render() {

        //Added button modify and delete (not done)

        return (<div >
            <h1> View All users : </h1>
            {/*drawContent*/}
            <br /><br />
            <Table>
                <TableHeader displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn>First name</TableHeaderColumn>
                        <TableHeaderColumn>Last name</TableHeaderColumn>
                        <TableHeaderColumn>Status</TableHeaderColumn>
                        <TableHeaderColumn>Profile</TableHeaderColumn>
                        <TableHeaderColumn>Modify</TableHeaderColumn>
                        <TableHeaderColumn>Delete</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {
                        this.state.users.map((val) =>
                            <TableRow>
                                <TableRowColumn>{val.fname}</TableRowColumn>
                                <TableRowColumn>{val.lname}</TableRowColumn>
                                <TableRowColumn>{val.status}</TableRowColumn>
                                <TableRowColumn>
                                    <LinkButton label={val.id_user} url={"/view-user/" + val.id_user} />
                                </TableRowColumn>
                                <TableRowColumn>
                                    <Button label="M" title="Modify user" primary={true} />
                                </TableRowColumn>
                                <TableRowColumn>
                                    <Button label="X" title="Delete user" primary={true} />
                                </TableRowColumn>

                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </div>);
    }

}