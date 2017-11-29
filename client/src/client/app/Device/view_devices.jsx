

import React from 'react';
import { render } from 'react-dom';

import { device_data_model, make_device_data_structure } from './device_data.jsx';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { Card, CardActions, CardHeader, CardTitle } from 'material-ui/Card'; //my imports
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

import LinkButton from './../LinkButton.jsx';
import { server_host_for_client } from './../client_connection.jsx';


/*
for (let i = 0; i < 100; i++) {
    items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
}
*/

export default class ViewDevices extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show_devices: make_device_data_structure(),
            devices: [],
            value: 2
        }
    }

    componentWillMount() {
        this.readDevicesFromDatabase();
        this.readTypeDataFromDatabase();
    }

    handleChange = (event, index, value) => this.setState({ value });


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
                <div>
              

                <Toolbar style={{ width : "100%" }}>
                
                 <ToolbarGroup>
                     <LinkButton url="/add-device" label="Add devices" />
                <LinkButton url="/hidden-device" label="Show hidden device" />
                    </ToolbarGroup>

                    <ToolbarGroup>
                        <ToolbarTitle text="Filtter view by :" /> 
                        <DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChange} style={{ backgroundColor: "#00bcd4", color : "white" }}>
                        {this.state.items}
                        </DropDownMenu>
                          <LinkButton url={"/filtter-device/" + this.state.value} label="Filter search by device type" />
                         </ToolbarGroup>
                </Toolbar>
            </div>
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

    readTypeDataFromDatabase(){

                    //post body
                    let postData = {
                    method: 'POST',
            headers: {
                    Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify("Menu"),
        };

        let link = "/device_type_option";

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

                /*
                let data_element = "";

                for (data_element in response) {
                    console.log(" >>>>>>>>>> " + response[data_element].type);
                let data =  response[data_element].type;
                      items.push(<MenuItem value={data} key={data} primaryText={`Device type : ${data}`} />);
                }
                */


                 const items = response.map( ( element, key ) => {
                    let data =  response[key].type;
                    return <MenuItem value={data} key={data} primaryText={`Device type : ${data}`} />
                })

                 this.setState( {...this.state, items  } )

            })
            .catch(function (error_msg) {
                    // error if connection problem happens 
                    console.log("Fetch error : " + error_msg);
                })


    }

    render() {
        return (
            <div>
                    {this.deviceTableLayout()}
                </div>);
    }

}