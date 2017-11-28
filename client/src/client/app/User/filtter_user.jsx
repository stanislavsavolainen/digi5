import React from 'react';
import { render } from 'react-dom';


import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { Card, CardActions, CardHeader, CardTitle } from 'material-ui/Card';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import LinkButton from './../LinkButton.jsx';

import { server_host_for_client } from './../client_connection.jsx';

export default class FiltterUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user_team: props.match.params.userTeam,
            users : [],
        }
    }

     componentWillMount() {
        this.readDevicesFromDatabase();
     }

       readDevicesFromDatabase() {

        let team ="";

        //post body
        let postData = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ team : this.state.user_team }),
        };

        //fetch
        let host = "http://127.0.0.1:5659";
        //let link = "/read_from_database3";
        let link = "/read_filtterd_users";

        // fetch(host + link, postData)
        fetch(server_host_for_client + link, postData)
            .then((resp) => {
                return resp.json();
            })
            .then((db_users) => {
               // this.state.users = db_users;
               // this.setState(this.state);

                 //use spread for saving old state
                this.setState( {  ... this.state ,  users : db_users });

            })
            .catch(function (error_msg) {
                // error if connection problem happens 
                console.log("Fetch error : " + error_msg);
            })

    }


    


    render() {
       // return ( <div> Filttered user by team : { this.state.user_team } </div>);
   
   
   
       return (<div >
            <LinkButton url="/add-user" label="Add user" />
            <LinkButton url="/hidden-user" label="show hidden user" />
          
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