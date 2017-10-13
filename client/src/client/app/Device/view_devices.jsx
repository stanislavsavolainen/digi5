

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


    readDevicesFromDatabase() {

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