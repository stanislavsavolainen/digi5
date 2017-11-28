

import React from 'react';
import { render } from 'react-dom';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { Card, CardActions, CardHeader, CardTitle } from 'material-ui/Card';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import LinkButton from './../LinkButton.jsx';


import { server_host_for_client } from './../client_connection.jsx';

export default class FiltterDevice extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            device_type: props.match.params.deviceType,
            devices : [],
        }
    }


        readDevicesFromDatabase() {

        let type = "";    

        //post body
        let postData = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ type : this.state.device_type }),
        };

        //fetch
        let host = "http://127.0.0.1:5659";
        //let link = "/read_from_database3";
        let link = "/read_filtterd_devices";

        // fetch(host + link, postData)
        fetch(server_host_for_client + link, postData)
            .then((resp) => {
                return resp.json();
            })
            .then((db_devices) => {
               // this.state.devices = db_devices;

               //use spread for saving old state
                this.setState( {  ... this.state ,  devices : db_devices });
            })
            .catch(function (error_msg) {
                // error if connection problem happens 
                console.log("Fetch error : " + error_msg);
            })

    }

    componentWillMount() {
        this.readDevicesFromDatabase();
    }


     deviceTableLayout() {

        return (

            <div>
                <LinkButton url="/add-device" label="Add devices" />
                <LinkButton url="/hidden-device" label="Show hidden device" />
              
                <br />
                <h1>View all devices </h1><br />

                <Table>
                    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>Profiles</TableHeaderColumn>
                            <TableHeaderColumn>Device name</TableHeaderColumn>
                            <TableHeaderColumn>Device type</TableHeaderColumn>
                            <TableHeaderColumn>Comments</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>

                    <TableBody displayRowCheckbox={false}>
                        {
                            this.state.devices.map((val, index) =>
                                <TableRow>

                                    <TableRowColumn>
                                        <LinkButton label={val.device_id} url={"/modify-device/" + val.device_id} />
                                    </TableRowColumn>

                                    <TableRowColumn>{val.name}</TableRowColumn>
                                    <TableRowColumn>{val.type}</TableRowColumn>
                                    <TableRowColumn>{val.about}</TableRowColumn>


                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </div>
        );


    }



    render() {
        //return (<div> Filttered devices : { this.state.device_type } </div>);
   
           return( <div> { this.deviceTableLayout() }  </div>); 
    }

}