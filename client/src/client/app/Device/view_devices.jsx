

import React from 'react';
import { render } from 'react-dom';

import { device_data_model, make_device_data_structure } from './device_data.jsx';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import Button from 'material-ui/RaisedButton';

export default class ViewDevices extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show_devices: make_device_data_structure(),
            devices: []
        }
    }

    componentWillMount() {
        this.readDevicesFromDatabase();
    }


    readDevicesFromDatabase() {

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
        let link = "/view_all_devices";

        fetch(host + link, postData)
            .then((resp) => {
                return resp.json();
            })
            .then((db_devices) => {
                // this.state.users = users;
                // this.setState(this.state);
                this.state.devices = db_devices;
                this.setState(this.state);

            })
            .catch(function (error_msg) {
                // error if connection problem happens 
                console.log("Fetch error : " + error_msg);
                // document.getElementById("answer_field").innerHTML = "<div align='center'><font color='red'><h1>Node Server is down ! </h1></font></div>";
            })

    }


    deviceTableLayout() {


        //Added button modify and delete (not done)

        return (
            <div>
                <Table>
                    <TableHeader displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>Device name</TableHeaderColumn>
                            <TableHeaderColumn>Device owner</TableHeaderColumn>
                            <TableHeaderColumn>Profiles</TableHeaderColumn>
                            <TableHeaderColumn>Modify</TableHeaderColumn>
                            <TableHeaderColumn>Remove</TableHeaderColumn>

                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {
                            this.state.devices.map((val) =>
                                <TableRow>
                                    <TableRowColumn>{val.name}</TableRowColumn>
                                    <TableRowColumn>{val.owner_id}</TableRowColumn>
                                    <TableRowColumn> 
                                        <Button label="Profile" primary={true} />
                                    </TableRowColumn>
                                    <TableRowColumn> 
                                        <Button label="M" title="modify device" primary={true} />
                                    </TableRowColumn>
                                    <TableRowColumn> 
                                        <Button label="X" title="delete device" primary={true} />
                                    </TableRowColumn>

                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </div>
        );


    }


    render() {
        return (
            <div>
                Show all devices :
            <br /> Device name : <font color="green"> {device_data_model.name} </font>
                <br /> Device serial number : <font color="green"> {device_data_model.serial_number} </font>
                <br /><br />
                {this.deviceTableLayout()}
            </div>);
    }

}