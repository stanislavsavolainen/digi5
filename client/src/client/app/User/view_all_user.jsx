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

import LinkButton from './../LinkButton.jsx';

export default class ViewAllUsers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // screen: 'A'
          //  result: "",
          //  p_fname: [],
          //  p_lname: [],
          //  p_states: [],
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



        fetch(host + link, postData)
            .then((resp) => {
                console.log(" >>> first then happen");
                return resp.json();
                // return resp.text();
            })
            .then((response) => {
                console.log("Fetch response happen !");

                //  this.handleResponse(response);
                // console.log("User profile data :" + JSON.stringify(response));

                //  this.state.profile_user = response;
                //    this.setState(this.state)
                //this.state.users.splice( this.state.users[deleted_user_id]  , 1);
               
                // this.state.users.splice(deleted_user_id, 1);
               this.state.users.splice(array_index, 1);

                //delete this.state.users[deleted_user_id];
                this.setState(this.state);
                // this.forceUpdate();

            })
            .catch(function (error_msg) {
                // error if connection problem happens 
                console.log("Fetch error : " + error_msg);
                // document.getElementById("answer_field").innerHTML = "<div align='center'><font color='red'><h1>Node Server is down ! </h1></font></div>";
            })


        //this.setState(this.state);
    }



    render() {

        //Added button modify and delete (not done)

        return (<div >
            <h1> View All users : </h1>
            {/*drawContent*/}
            <br /><br />
            <Table>
                <TableHeader adjustForCheckbox={false} displaySelectAll={false} >
                    <TableRow >
                        <TableHeaderColumn>First name</TableHeaderColumn>
                        <TableHeaderColumn>Last name</TableHeaderColumn>
                        <TableHeaderColumn>Status</TableHeaderColumn>
                        <TableHeaderColumn>Profile</TableHeaderColumn>
                        {/*<TableHeaderColumn>Modify</TableHeaderColumn> */}
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {
                        this.state.users.map((val, index) =>
                            <TableRow>
                                <TableRowColumn >{val.fname}</TableRowColumn>
                                <TableRowColumn >{val.lname}</TableRowColumn>
                                <TableRowColumn>{val.status}</TableRowColumn>
                                
                                <TableRowColumn>
                                    <LinkButton label={val.id_user} url={"/modify-user/" + val.id_user} />
                                </TableRowColumn>

                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </div>);
    }

}