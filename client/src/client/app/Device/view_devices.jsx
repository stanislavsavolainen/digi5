

import React from 'react';
import { render } from 'react-dom';

import { device_data_model, make_device_data_structure } from './device_data.jsx';

export default class ViewDevices extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show_devices : make_device_data_structure()
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
            .then((users) => {
               // this.state.users = users;
               // this.setState(this.state);
            })
            .catch(function (error_msg) {
                // error if connection problem happens 
                console.log("Fetch error : " + error_msg);
                // document.getElementById("answer_field").innerHTML = "<div align='center'><font color='red'><h1>Node Server is down ! </h1></font></div>";
            })

    }


    deviceTableLayout(){

    }


    render() {
        return (
            <div>
                Show all devices :
            <br /> Device name : <font color="green"> {device_data_model.name} </font>
                <br /> Device serial number : <font color="green"> {device_data_model.serial_number} </font>

            </div>);
    }

}