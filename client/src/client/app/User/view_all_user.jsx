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

import LinkButton from './../LinkButton.jsx';

import { server_host_for_client } from './../client_connection.jsx';

const items = [];
for (let i = 0; i < 100; i++) {
    //items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
}

export default class ViewAllUsers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            value: 2
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

                let data_element = "";
                for (data_element in response) {
                    console.log( " >>>>>>>>>> " + response[data_element].team );
                       let data =  response[data_element].team;
                      items.push(<MenuItem value={data} key={data} primaryText={`User team : ${data}`} />);
                }


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
            <font style={{ backgroundColor: 'silver', fontSize: '50' }} >
                Filtering :

                <DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChange} style={{ backgroundColor: "#22C489" }}>
                    {items}
                </DropDownMenu>
                <LinkButton url={"/filtter-user/" + this.state.value } label="Filter search by user team" />
            </font>
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