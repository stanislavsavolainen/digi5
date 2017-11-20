
import React from 'react';
import { render } from 'react-dom';


import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';
import { Card, CardActions, CardHeader, CardTitle } from 'material-ui/Card';
import Button from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';



//my imports
//import LinkButton from './../LinkButton.jsx';
import { device_data_model, make_device_data_structure, make_device_data_structure2 } from './device_data.jsx';
import { server_host_for_client } from './../client_connection.jsx';


// http://www.material-ui.com/#/components/dropdown-menu

const items = [];
for (let i = 0; i < 100; i++) {
    items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
}

export default class AddDevice extends React.Component {

    constructor(props) {
        super(props);
      //  this.state = { value: 10 };
        this.state = {
            show_devices: make_device_data_structure2(),
            value: 2,

        }

    }

    handleChange = (event, index, value) => this.setState({ value });


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

        //  fetch(host + link, postData)
        fetch(server_host_for_client + link, postData)
            // server_host_for_client 
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
                                                field.type == "date"
                                                    ?
                                                    <DatePicker hintText={field.fieldName} style={{ margin: 12 }} title={field.fieldName} />
                                                    :
                                                    field.type == "checkbox" ? <Checkbox label={field.fieldName} title={field.fieldName}
                                                        onCheck={(event, isInputChecked) => this.FieldListener(block_key, row_key, field_key, isInputChecked, field.type)}
                                                    />
                                                        :
                                                        <TextField hintText={field.fieldName} style={{ margin: 12 }} title={field.fieldName}
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
    handleChange(event, index, value) {
        // this.setState({value})
        this.state.value = value;
        this.setState(this.state);
    }

    render() {
        return (
            <div>
                {this.drawDeviceAddingLayout()}
                <Button label="Add device" primary={true} onClick={() => this.addDeviceToDB()} />
                <br /><br /><br /><br /><br /><br />
                <div>
                    <DatePicker hintText="Portrait Dialog" />
                    <DatePicker hintText="Landscape Dialog" mode="landscape" />
                    <DatePicker hintText="Dialog Disabled" disabled={true} />
                    <DatePicker hintText="Open to Year" openToYearSelection={true} />
                </div>
                <br /><br />
                <DropDownMenu value={this.state.value} onChange={(e, i, v) => this.handleChange(e, i, v)} openImmediately={true} style={{ backgroundColor: 'silver', color: 'blue' }} >
                    <MenuItem value={1} primaryText="Never" />
                    <MenuItem value={2} primaryText="Every Night" />
                    <MenuItem value={3} primaryText="Weeknights" />
                    <MenuItem value={4} primaryText="Weekends" />
                    <MenuItem value={5} primaryText="Weekly" />
                </DropDownMenu>
                <br /><br />
                <DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChange}>
                    {items}
                </DropDownMenu>


            </div>);
    }






}