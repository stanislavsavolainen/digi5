
import React from 'react';
import { render } from 'react-dom';

//material-ui component
import Button from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardTitle } from 'material-ui/Card';

//my component
import LinkButton from './../LinkButton.jsx';
import { device_data_model, make_device_data_structure } from './device_data.jsx';

export default class ModifyDevice extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            device_id: props.match.params.deviceId,
            show_devices: make_device_data_structure(),
            device_profile: [],
        }
    }


    FieldListener(block_key, row_key, field_key, data, type) {
        this.state.show_devices[block_key].rows[row_key][field_key].value = data;

        console.log("Data lenght :" + data.length)

    }



    renderProfileLayout() {

        return (
            <div>
                {this.state.show_devices.map((block, block_key) =>
                    <div style={{ margin: "30px" }}>
                        <Card>
                            <CardHeader title={block.title} />
                            <CardActions>
                                {
                                    block.rows.map((row, row_key) =>
                                        <div>{
                                            row.map((field, field_key) =>

                                                <div> {


                                                    field.modify == false ? <Button label="Modify field" primary={true} onClick={() => { field.modify = true; this.setState(this.state) }} />
                                                        :
                                                        <Button label="Cancel" primary={true} onClick={() => { field.modify = false; this.setState(this.state) }} />

                                                }
                                                    {

                                                        this.state.device_profile.length > 0 ? field.fieldName + "  :  " + this.state.device_profile[0][field.db_name] : "empty"

                                                    } {

                                                        field.modify == true ? <TextField /> : ""

                                                    }  </div>,

                                                {/* <Button
                                        label={field.fieldName}
                                        onChange={(event) => console.log("")} /> */},

                                            )}</div>)
                                }

                            </CardActions>
                        </Card>

                    </div>
                )}
            </div>
        );

    }


    renderProfileLayout2() {

        return (
            <div>

                {
                    //remember map return content !
                    //lambda one line = return
                    this.state.device_profile.length == 0 ? <div /> : this.state.show_devices.map((block, block_key) =>
                        <Card>
                            <CardHeader title={block.title} />
                            <CardActions>
                                {
                                    block.rows.map((row, row_key) =>
                                        <div>
                                            {row.map((field, field_key) =>

                                                <TextField hintText={field.fieldName}
                                                    onChange={(event) => this.FieldListener(block_key, row_key, field_key, event.target.value, field.type)}
                                                    // <div> {this.state.device_profile.length > 0 ? field.fieldName + "  :  " + this.state.device_profile[0][field.db_name] : "empty" } </div>      
                                                    value={this.state.device_profile[0][field.db_name]}
                                                />
                                            )

                                            }

                                        </div>)
                                }
                            </CardActions>
                        </Card>)
                        
                }
                <Button label="Update device" primary = {true} onClick={ () => this.UpdateDeviceDataAtDB() } />
            </div>);

    }




    readDeviceProfileFromDB() {

        //post body
        let postData = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ device_id: this.state.device_id }),
        };

        //fetch
        let host = "http://127.0.0.1:5659";
        // let link = "/read_from_database4"; //read profile data
        let link = "/device_profile";

        fetch(host + link, postData)
            .then((resp) => {
                console.log(" >>> first then happen");
                return resp.json();
                // return resp.text();
            })
            .then((response) => {
                console.log("Fetch response happen !");

                //  this.handleResponse(response);
                console.log("User profile data :" + JSON.stringify(response));

                this.state.device_profile = response;
                this.setState(this.state)

            })
            .catch(function (error_msg) {
                // error if connection problem happens 
                console.log("Fetch error : " + error_msg);
                // document.getElementById("answer_field").innerHTML = "<div align='center'><font color='red'><h1>Node Server is down ! </h1></font></div>";
            })

    }


    UpdateDeviceDataAtDB() {

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
        let link = "/modify_device";

        fetch(host + link, postData)
            .then(() => {
                console.log("Fetch done");
                this.props.history.push("/view-devices");
            })
            .catch(function (error_msg) {
                console.log("Fetch error : " + error_msg);
            })

    }


    componentWillMount() {
        this.readDeviceProfileFromDB();
    }


    render() {
        return (<div>
            <h1>  Modify device {this.state.device_id}  </h1>
            <br />< br />
            {this.renderProfileLayout2()}

        </div>);
    }

}