

import React from 'react';
import { render } from 'react-dom';

import { device_data_model, make_device_data_structure } from './device_data.jsx';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import Button from 'material-ui/RaisedButton';

import LinkButton from './../LinkButton.jsx';
import { server_host_for_client } from './../client_connection.jsx';

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

        // fetch(host + link, postData)
        fetch(server_host_for_client + link, postData)
            .then((resp) => {
                return resp.json();
            })
            .then((db_devices) => {
                this.state.devices = db_devices;
                this.setState(this.state);
            })
            .catch(function (error_msg) {
                // error if connection problem happens 
                console.log("Fetch error : " + error_msg);
            })

    }


    deleteDeviceById(deleted_device_id, array_index) {

        console.log("Delete device id : " + deleted_device_id + " and array index " + array_index);

        //post body
        let postData = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ device_id: deleted_device_id }),
        };

        //fetch
        let host = "http://127.0.0.1:5659";
        // let link = "/read_from_database4"; //read profile data
        let link = "/delete_device";

        fetch(host + link, postData)
            .then((resp) => {
                console.log(" >>> first then happen");
                return resp.json();
                // return resp.text();
            })
            .then((response) => {
                console.log("Fetch response happen !");

                this.state.devices.splice(array_index, 1);
                this.setState(this.state);

            })
            .catch(function (error_msg) {
                // error if connection problem happens 
                console.log("Fetch error : " + error_msg);
                // document.getElementById("answer_field").innerHTML = "<div align='center'><font color='red'><h1>Node Server is down ! </h1></font></div>";
            })

    }

    deviceTableLayout() {

        return (

            <div>
                <LinkButton url="/add-device" label="Add devices" />
                <br />
                <h1>View all devices </h1><br />
                
                <Table>
                    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>Profiles</TableHeaderColumn>
                            <TableHeaderColumn>Device name</TableHeaderColumn>
                            <TableHeaderColumn>Device type</TableHeaderColumn>
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

                {this.deviceTableLayout()}
            </div>);
    }

}