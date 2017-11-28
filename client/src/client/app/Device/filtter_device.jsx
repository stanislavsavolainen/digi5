

import React from 'react';
import { render } from 'react-dom';

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

    componentWillMount() {}





    render() {
        return (<div> Filttered devices : { this.state.device_type } </div>);
    }

}