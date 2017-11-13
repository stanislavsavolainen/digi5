import React from 'react';
import { render } from 'react-dom';

//material-ui
//import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/FlatButton';
//import Toolbar from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';

//import { ButtonStyle, user_data_structure, field_name } from './theme_styles.jsx';
import { ButtonStyle, user_data_structure, field_name } from './user_data.jsx';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { Card, CardActions, CardHeader, CardTitle } from 'material-ui/Card';

import LinkButton from './../LinkButton.jsx';

import { server_host_for_client } from './../client_connection.jsx';

export default class ViewAllUsers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
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

      //  fetch(host + link, postData)
       fetch( server_host_for_client  + link, postData)
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
            })
    }



    deleteUserById(deleted_user_id, array_index) {

        //post body
        let postData = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id: deleted_user_id }),
        };

        //fetch
        let host = "http://127.0.0.1:5659";
        // let link = "/read_from_database4"; //read profile data
        let link = "/delete_user";



       // fetch(host + link, postData)
        fetch( server_host_for_client  + link, postData)
            .then((resp) => {
                console.log(" >>> first then happen");
                return resp.json();
                // return resp.text();
            })
            .then((response) => {
                console.log("Fetch response happen !");
               this.state.users.splice(array_index, 1);
                this.setState(this.state);

            })
            .catch(function (error_msg) {
                // error if connection problem happens 
                console.log("Fetch error : " + error_msg);
            })

    }



    render() {

        //Added button modify and delete (not done)

        return (<div >
            <LinkButton url="/add-user" label="Add user" />
            <LinkButton url="/hidden-user" label="show hidden user" />
            {/*<Link label="Show hidden user" style={{ margin: 12 }} primary={true} /> */} 
            <br /><br />
            <h1> View All users : </h1>
            <br /><font> SELECT * FROM users WHERE user_visible="1"  </font>
            {/*drawContent*/}
            <br /><br />
            <Table >
                <TableHeader adjustForCheckbox={false} displaySelectAll={false} >
                    <TableRow>
                        <TableHeaderColumn>Profile</TableHeaderColumn>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Title</TableHeaderColumn>
                        <TableHeaderColumn>Team</TableHeaderColumn>
                        {/*<TableHeaderColumn>Modify</TableHeaderColumn> */}
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {
                        this.state.users.map((val, index) =>
                            <TableRow >
                                
                                <TableRowColumn>
                                    <LinkButton label={val.user_id} url={"/modify-user/" + val.user_id} />
                                </TableRowColumn>

                                <TableRowColumn >{val.fname + " " +val.lname} </TableRowColumn>
                                 <TableRowColumn >{val.title}</TableRowColumn>
                                <TableRowColumn>{val.team}</TableRowColumn>



                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>

        </div>);
    }

}