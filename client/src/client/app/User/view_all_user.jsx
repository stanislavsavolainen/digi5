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
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

import LinkButton from './../LinkButton.jsx';

import { server_host_for_client } from './../client_connection.jsx';


export default class ViewAllUsers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            value: 2,
            items: []
        }
    }

    componentWillMount() {
        this.getAllUsers();
        this.readTeamDataFromDatabase();
    }


    handleChange = (event, index, value) => this.setState({ value });


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
        fetch(server_host_for_client + link, postData)
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
        fetch(server_host_for_client + link, postData)
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



    readTeamDataFromDatabase() {

        //post body
        let postData = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify("Menu"),
        };

        //fetch
        //let host = "http://127.0.0.1:5659";
        // let link = "/read_from_database4"; //read profile data
        let link = "/user_team_option";



        // fetch(host + link, postData)
        fetch(server_host_for_client + link, postData)
            .then((resp) => {
                console.log(" >>> first then happen");
                return resp.json();
                // return resp.text();
            })
            .then((response) => {
                console.log("Fetch response happen !");

                console.log("PUSH DATA TO FILTER DROP DOWN");
                console.log(JSON.stringify(response));

                const items = response.map((element, key) => {
                    let data = response[key].team;
                    return <MenuItem value={data} key={data} primaryText={`User team : ${data}`} />
                })

                this.setState({ ...this.state, items })


            })
            .catch(function (error_msg) {
                // error if connection problem happens 
                console.log("Fetch error : " + error_msg);
            })




    }


    render() {

        //Added button modify and delete (not done)

        return (<div >
          
            <Toolbar style={{ width: "100%" }}>

                <ToolbarGroup>
                    <LinkButton url="/add-user" label="Add user" />
                    <LinkButton url="/hidden-user" label="show hidden user" />
                </ToolbarGroup>

                <ToolbarGroup>
                    <ToolbarTitle text="Filtter view by :" />
                    <DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChange}  style={{ backgroundColor: "#00bcd4", color : "white" }} >
                     {this.state.items}
                    </DropDownMenu>
                    <LinkButton url={"/filtter-user/" + this.state.value} label="Filter search by user team" />
                </ToolbarGroup>
            </Toolbar>

            {/*<Link label="Show hidden user" style={{ margin: 12 }} primary={true} /> */}
            <br /><br />
            <h1> View All users : </h1>
            {/*drawContent*/}
            <br /><br />
            <Table >
                <TableHeader adjustForCheckbox={false} displaySelectAll={false} >
                    <TableRow>
                        <TableHeaderColumn>Profile</TableHeaderColumn>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Title</TableHeaderColumn>
                        <TableHeaderColumn>Team</TableHeaderColumn>
                        <TableHeaderColumn>Comments</TableHeaderColumn>
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

                                <TableRowColumn >{val.fname + " " + val.lname} </TableRowColumn>
                                <TableRowColumn >{val.title}</TableRowColumn>
                                <TableRowColumn>{val.team}</TableRowColumn>
                                <TableRowColumn>{val.comments}</TableRowColumn>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>

        </div>);
    }

}