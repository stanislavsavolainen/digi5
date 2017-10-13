

import React from 'react';
import { render } from 'react-dom';

import { device_data_model, make_device_data_structure } from './device_data.jsx';

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
                    this.state.show_devices.map(block =>
                        <Card>
                            <CardHeader title={block.title} />
                            <CardActions>
                                {
                                    blocks.rows.map(block.rows, row =>
                                        rows.map(row, field =>
                                            <TextField hintText={field.fieldName} />))
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