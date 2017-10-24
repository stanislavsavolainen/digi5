
import React from 'react';
import { render } from 'react-dom';

import { device_data_model, make_device_data_structure } from './device_data.jsx';

import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardTitle } from 'material-ui/Card';//my imports

//import LinkButton from './../LinkButton.jsx';
import Button from 'material-ui/RaisedButton';

import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


export default class AddDevice extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show_devices: make_device_data_structure(),
            value : 2,
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


    addDeviceToDB() {

        console.log("Add device to database");
        console.log("Field data : " + JSON.stringify(this.state.show_devices));

        let post_body = {
            device_data: this.state.show_devices
                .reduce((result, block) => result.concat(block.rows), [])
                .reduce((result, row) => result.concat(result, row))
                .filter((field) => field.value != undefined && field.db_name != undefined)
                .reduce((result, field) => Object.assign(result, { [field.db_name]: field.value }), {})
        };


        //post body
        let postData = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post_body),
        };

        // ======== FETCH ====================

        //fetch
        let host = "http://127.0.0.1:5659";
        let link = "/add_device";

        fetch(host + link, postData)
            .then(() => {
                console.log("Fetch done");
                this.props.history.push("/view-devices");
            })
            .catch(function (error_msg) {
                console.log("Fetch error : " + error_msg);
            })


    }


    FieldListener(block_key, row_key, field_key, data, type) {
        this.state.show_devices[block_key].rows[row_key][field_key].value = data;

        console.log("Data lenght :" + data.length)

    }


    drawDeviceAddingLayout() {

        return (
            <div>

                {
                    //remember map return content !
                    //lambda one line = return
                    this.state.show_devices.map((block, block_key) =>
                        <Card>
                            <CardHeader title={block.title} />
                            <CardActions>
                                {
                                    block.rows.map((row, row_key) =>
                                        <div>
                                            {row.map((field, field_key) =>
                                                <TextField hintText={field.fieldName}
                                                    onChange={(event) => this.FieldListener(block_key, row_key, field_key, event.target.value, field.type)} />)}
                                        </div>)
                                }
                            </CardActions>
                        </Card>)
                }
            </div>);

    }

    //this function is for DropDownMenu component test
   // handleChange = (event, index, value) => this.setState({value});
    handleChange(event, index, value){
       // this.setState({value})
       this.state.value = value;
        this.setState(this.state);
    }

    render() {
        return (
            <div>
                {this.drawDeviceAddingLayout()}
                <Button label="Add device" primary={true} onClick={() => this.addDeviceToDB()} />
                <br /><br />
                <div>
                    <DatePicker hintText="Portrait Dialog" />
                    <DatePicker hintText="Landscape Dialog" mode="landscape" />
                    <DatePicker hintText="Dialog Disabled" disabled={true} />
                    <DatePicker hintText="Open to Year" openToYearSelection={true} />
                </div>
                <br /><br />
                <DropDownMenu value={this.state.value} onChange={(e,i,v) => this.handleChange(e,i,v) } openImmediately={true} style={ { backgroundColor: 'silver', color: 'blue' }} >
                    <MenuItem value={1} primaryText="Never" />
                    <MenuItem value={2} primaryText="Every Night" />
                    <MenuItem value={3} primaryText="Weeknights" />
                    <MenuItem value={4} primaryText="Weekends" />
                    <MenuItem value={5} primaryText="Weekly" />
                </DropDownMenu>
            </div>);
    }






}