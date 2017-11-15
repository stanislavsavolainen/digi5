

import React from 'react';
import { render } from 'react-dom';

import { device_data_model, make_device_data_structure } from './device_data.jsx';
import { server_host_for_client } from './../client_connection.jsx';


import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardTitle } from 'material-ui/Card';//my imports


export default class AddDevice extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show_devices: make_device_data_structure()
        }

    }



    // mymap(array, fn) {
    //     var result = []
    //     for (var i = 0; i < array.length; ++i) {
    //         result.push(fn(array[i]))
    //     }
    //     return result;
    // }

    // myreduce(arary, fn, initial) {
    //     var result = initial;
    //     for (var i = 0; i < array.length; ++i) {
    //         result = fn(result, array[i])
    //     }
    //     return result;
    // }

    drawDeviceAddingLayout() {


        return (
            <div>


                {
                    //remember map return content !
                    //lambda one line = return
                    this.state.show_devices.map(block =>
                        <Card>
                            <CardHeader title={block.title} />
                            <CardActions>
                                {
                                    block.rows.map(row =>
                                        <div>
                                            {row.map(field => <TextField hintText={field.fieldName} />)}
                                        </div>)
                                }
                            </CardActions>
                        </Card>)
                }
            </div>);

    }

    render() {
        return (
            <div>
                Add new device :
            <br /> Device name : <TextField hintText={device_data_model.name} />
                <br /> Device serial number : <TextField hintText={device_data_model.serial_number} />
                <br /><br /> {this.drawDeviceAddingLayout()}
            </div>);
    }

}